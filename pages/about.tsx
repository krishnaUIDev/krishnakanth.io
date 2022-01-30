import React, { useState, useEffect } from "react";
import { Row, Col } from "react-flexbox-grid";
import dynamic from "next/dynamic";
import { config } from "react-spring";
import { useTranslations } from "next-intl";
import type { NextPage } from "next";
const TextTransition = dynamic(() => import("react-text-transition"), {
  ssr: false,
});

import Layout from "../components/Layout";
import Icon from "../components/Icon";
import { PRESENT, SKILLS } from "../constants/Stack";
import { AFFILIATIONS } from "../constants/Uses";

import { client } from "./api/apollo-client";
import {
  BlogConnectionConnection,
  Query,
} from "../src/types/generated/graphql";
import { GraphQLError } from "graphql";
// import { PrismicRichText } from "@prismicio/react";
import { BlogPageQuery } from "../graphQueries";

interface AboutProps {
  data?: BlogConnectionConnection;
  errors?: GraphQLError;
}

const About: NextPage<AboutProps> = ({ data, errors }) => {
  const [index, setIndex] = useState(0);
  const avatar = `/images/Avatar.jpg`;
  const t = useTranslations("navBar");
  const edge = data?.edges?.length ? data?.edges[0] : undefined;

  console.log(edge);

  // useEffect(() => {
  //   const intervalId = setInterval(
  //     () => setIndex((index) => index + 1),
  //     3000 // every 3 seconds
  //   );
  // }, []);

  return (
    <>
      <img className="about-avatar" src={avatar} />

      <Layout secondaryPage isHomepage={false}>
        <div style={{ marginTop: 50 }}>
          <h1 className="about-h1">
            Krishna{" "}
            <TextTransition
              text={SKILLS[index % SKILLS.length]}
              springConfig={config.gentle}
              style={{ display: "inline-block" }}
            />
          </h1>

          <div className="about-intro">
            {AFFILIATIONS.map(({ title, stack }) => (
              <>
                <h3>{title}</h3>
                <ul
                  style={{ marginTop: "0px" }}
                  className="uses-list"
                  key={title}
                >
                  {stack.map(({ name, description, link }) => (
                    <li key={name}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        {name}
                      </a>
                      <span>{description}</span>
                    </li>
                  ))}
                </ul>
              </>
            ))}
            <hr />
            <h2>My daily stack</h2>
            <Row style={{ marginTop: 30 }}>
              {PRESENT.map((s) => (
                <Col
                  md={2}
                  xs={4}
                  key={s}
                  style={{ textAlign: "center", marginBottom: 40 }}
                >
                  <Icon type={s} />
                  <div className="stack-name">{s}</div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Layout>
    </>
  );
};

// export const getStaticProps = async ({ locale }) => {
//   // const client = Client();
//   // const queryResult = await client.getAllByType("blog");
//   return {
//     props: {
//       messages: require(`../lang/${locale}.json`),
//     },
//   };
// };

export async function getServerSideProps({ locale }) {
  const { data, errors = null } = await client.query<{
    allBlogs: Query["allBlogs"];
  }>({
    query: BlogPageQuery,
  });

  return {
    props: {
      data: data?.allBlogs,
      errors: errors,
    },
  };
}

export default About;
