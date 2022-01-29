import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import matter from "gray-matter";
import dynamic from "next/dynamic";
import { Row, Col } from "react-flexbox-grid";
import { config } from "react-spring";

const TextTransition = dynamic(() => import("react-text-transition"), {
  ssr: false,
});

import { SKILLS, SOCIAL } from "../constants/Stack";
import Layout, { Icon } from "../components/Layout";

function Homepage({ writings }) {
  const [index, setIndex] = useState(0);
  const { data: session } = useSession();

  const avatar = `/images/Avatar.jpg`;

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
  }, []);

  return (
    <>
      <img className="about-avatar" src={avatar} />
      <Layout secondaryPage>
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
            <Row>
              <Col md={12}>
                Hi there and welcome 👋🏻.
                <br />
                Web Developer
                <br />
                All about business enabling technology (check my{" "}
                <a
                  href="https://github.com/krishnaUIDev"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  GitHub 🤖
                </a>{" "}
                ).
                <br />
                Heavy focus on React, NodeJS, and Native apps.
                <br />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="">
                  <a
                    href="mailto: krishna.kondoju88@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="primary-button"
                  >
                    Contact {"  "}Krishna{" "}
                  </a>
                </div>
              </Col>
            </Row>
            <hr />
          </div>

          <>
            <h3>{SOCIAL.title}</h3>

            <Row className="uses-intro" style={{ marginTop: 30 }}>
              {SOCIAL.data.map((s) => (
                <Col
                  md={2}
                  xs={4}
                  key={s.link}
                  style={{ textAlign: "center", marginBottom: 40 }}
                >
                  <Icon stack={s.platform} />
                  <div className="stack-name">
                    <a href={s.link} target="_blank" rel="noopener noreferrer">
                      {s.platform}
                    </a>
                  </div>
                </Col>
              ))}
            </Row>
          </>
        </div>
      </Layout>
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </>
  );
}

Homepage.getInitialProps = async (context) => {
  const writings = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      const document = matter(value.default);
      return { document, slug };
    });

    return data
      .slice()
      .sort(
        (a, b) =>
          new Date(b.document.data.date) - new Date(a.document.data.date)
      );
  })(require.context("../writings", true, /\.md$/));

  return {
    writings,
  };
};
export default Homepage;
