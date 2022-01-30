import React, { useState, useEffect } from "react";

import dynamic from "next/dynamic";
import { Row, Col } from "react-flexbox-grid";
import { config } from "react-spring";
import { useTranslations } from "next-intl";

const TextTransition = dynamic(() => import("react-text-transition"), {
  ssr: false,
});

import { SKILLS, SOCIAL } from "../constants/Stack";
import Layout, { Icon } from "../components/Layout";

function Homepage() {
  const [index, setIndex] = useState(0);
  const avatar = `/images/Avatar.jpg`;
  const t = useTranslations("home");

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
                {t("title")} 👋🏻.
                <br />
                {t("profession")}
                <br />
                {t("about")} (check my{" "}
                <a
                  href="https://github.com/krishnaUIDev"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  GitHub 🤖
                </a>{" "}
                ).
                <br />
                {t("techStack")}
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
    </>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../lang/${locale}.json`),
    },
  };
}

export default Homepage;
