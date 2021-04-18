import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { StaticImage } from "gatsby-plugin-image"
// markup

function Content({ children }) {
  return <div style={{ minHeight: "80vh" }}>{children}</div>;
}

function Row({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "80px",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
}

function Column({ children }) {
  return (
    <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
      {children}
    </div>
  );
}

function TextHeadline({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "65%",
        alignSelf: "center",
        marginLeft: "0px",
      }}
    >
      {children}
    </div>
  );
}

function Headline1({ children }) {
  return (
    <h1
      style={{
        fontFamily: "Libre Calson Text, serif",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "60px",
        lineHeight: "69px",
        marginBottom:'0px'
      }}
    >
      {children}
    </h1>
  );
}

function BodyCopy({ children }) {
  return (
    <p
      style={{
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "28px",
        marginBottom:'40px'
      }}
    >
      {children}
    </p>
  );
}

function Certification() {
  return (
    <Layout>
      <Navbar />
      <Content>
        <Row>
          <Column>
            <TextHeadline>
              <Headline1> RAIL Certification</Headline1>
              <BodyCopy>
                <strong>
                  The world’s first independent, accredited certification
                  program of its kind.
                </strong>
                <br />
                Developed under the Global AI Action Alliance for the World
                Economic Forum (WEF), along with a diverse community of leading
                experts, RAIL certification is based on objective assessments of
                fairness, bias, explainability, and other concrete metrics of
                responsibly built AI systems. The Schwartz Reisman Institute for
                Technology and Society (SRI) at University of Toronto is serving
                as a business partner on the development phase of the
                initiative.
              </BodyCopy>
            </TextHeadline>
          </Column>
          <StaticImage src="../images/Badge.png" alt="RAI logo" />
          <Column>
          </Column>
        </Row>
      </Content>
      <p>Hello there</p>
    </Layout>
  );
}

export default Certification;
