import React, { useState, useEffect } from "react";
import { Row, Col } from "react-flexbox-grid";
import dynamic from "next/dynamic";
import { config } from "react-spring";

const TextTransition = dynamic(() => import("react-text-transition"), {
  ssr: false,
});

import Layout from "../components/Layout";
import Icon from "../components/Icon";
import { PRESENT, SKILLS } from "../constants/Stack";
import { AFFILIATIONS } from "../constants/Uses";

function About() {
  const [index, setIndex] = useState(0);
  const avatar = `/images/Avatar.jpg`;

  var subtitleStyle = {
    color: "#222",
    marginTop: "0px",
  };

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
}

export default About;
