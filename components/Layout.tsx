import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import simpleIcons from "simple-icons";
import Nav from "./NavBar";

interface LayoutProps {
  children: any;
  isHomepage?: boolean;
  secondaryPage?: boolean;
}

interface IconProps {
  stack?: string;
  style?: object;
}

export const Icon = ({ stack, style }: IconProps) => {
  const icon = simpleIcons.get(stack);

  return (
    <div
      data-icon={stack}
      style={{
        fill: `#${icon.hex}`,
        display: "inline-block",
        width: "50px",
        margin: "0 auto",
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
};

const Layout = ({ children, isHomepage, secondaryPage }: LayoutProps) => {
  const containerProps = {
    ...(isHomepage && { md: 12 }),
    ...(!isHomepage && { md: 8, mdOffset: 2 }),
  };

  return (
    <>
      <Nav />
      <Grid>
        <Row>
          <Col {...containerProps}>
            {!secondaryPage && (
              <h1
                className={`blog-title`}
                style={isHomepage && { textAlign: "left" }}
              >
                Krishna Kanth
              </h1>
            )}

            {children}
          </Col>
        </Row>
      </Grid>

      <footer>footer</footer>
    </>
  );
};

export default Layout;
