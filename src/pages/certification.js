import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Headline1, Headline2, Headline3, MediumBody, LargeBody, SmallBody, Heading1 } from "../components/Text";
import { PrimaryBtn } from "../components/Buttons";

function Content({ children }) {
  return <div style={{ minHeight: "80vh" }}>{children}</div>;
}
//   display: flex;
// align-items: center;
// margin-bottom: 80px;
// flex-wrap: wrap;
// width: 100%;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 80px;
`;

const CertificationRow = styled.div`
  background-color: #2f2d34;
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 80px;
  padding: 5% 4%;
`;

// width: 50%;
// display: flex;
// flex-direction: column
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

const TextHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 0px;
`;

const BodyCopy = styled.p`
font-family: Roboto
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 28px;
margin-bottom: 150px
`;

function VerticalLineText(props) {
  return (
    <div>
      <p style={(SmallBody, { borderLeft: "3px solid #2F2D34" })}>
        <p style={{ paddingLeft: "10px" }}>
          <strong>{props.title}</strong>
          <br /> {props.subtitle}
        </p>
      </p>
    </div>
  );
}

function Certification() {
  return (
    <Layout title="Certification">
      <Row>
        <Column>
          <TextHeadline>
            <Headline1>RAIL Certification</Headline1>
            <MediumBody>
              <strong>
                The world’s first independent, accredited certification program
                of its kind.
              </strong>
              <br />
              Developed under the Global AI Action Alliance for the World
              Economic Forum (WEF), along with a diverse community of leading
              experts, RAIL certification is based on objective assessments of
              fairness, bias, explainability, and other concrete metrics of
              responsibly built AI systems. The Schwartz Reisman Institute for
              Technology and Society (SRI) at University of Toronto is serving
              as a business partner on the development phase of the initiative.
            </MediumBody>
          </TextHeadline>
        </Column>
        <Column>
          <StaticImage
            src="../images/rai-icons/Badge.png"
            alt="RAI logo"
            objectFit="contain"
          />
        </Column>
      </Row>
      <CertificationRow>
        <StaticImage
          src="../images/rai-content/Certification.png"
          alt="RAI logo"
        />
      </CertificationRow>

      <Row>
        <Column>
          <TextHeadline>
            <Headline1>Why RAIL?</Headline1>
            <BodyCopy>
              <strong>Certify AI Systems, not individuals</strong>
              <br />
              Focus on the technology components and governance of systems. This
              is not a certification program for developers or data scientists.
              <br />
              <br />
              <strong> Build on existing frameworks and regulations </strong>
              <br />
              Provide a practical and unified framework that translates across
              already-existing work from the industry. We are not trying to
              re-inventing the wheel.
              <br />
              <br />
              <strong>Assessments specific to system type</strong>
              <br />
              Assessment criteria will be customized based on the type of AI
              system being assessed (e.g., Intelligent process automation, Image
              & Object recognition, Text & Speech Analysis, Advanced data
              analytics, NLP & content creation)
              <br />
              <br />
              <strong> Assessments specific to domain and region</strong>
              <br />
              In order to have meaningful substance, assessment criteria will
              also cover specific application domains (e.g., credit &
              collections, healthcare diagnostics, etc.), and regions.
            </BodyCopy>
            <Headline3>Certification Working Group</Headline3>
            <BodyCopy>
              A multi-disciplinary team of industry experts, policymakers,
              regulators, consumers, and academia, aimed at creating a
              measurable way to assess the responsible development and
              deployment of AI systems
            </BodyCopy>
          </TextHeadline>
        </Column>
        <Column style={{ width: "40%" }}>
          <div style={{ backgroundColor: "#F6F6F6", padding: "8% 5%" }}>
            <TextHeadline>
              <Heading1 style={{ marginBottom: "50px" }}>
                Systems are assessed in 5 categories
              </Heading1>
              <div>
                {/* <BodyCopy> */}
                <VerticalLineText
                  title="Accountability"
                  subtitle="Lorem ipsum"
                ></VerticalLineText>
                <br />
                <VerticalLineText
                  title="Bias and Fairness"
                  subtitle="Ensuring equity in implementation"
                ></VerticalLineText>
                <br />
                <VerticalLineText
                  title="Explainability and Interpretability"
                  subtitle="Methods and techniques from understanding by humans"
                ></VerticalLineText>
                <br />
                <VerticalLineText
                  title="Robustness"
                  subtitle="Ensuring the efficacy of underlying technology"
                ></VerticalLineText>
                <br />
                <VerticalLineText
                  title="Data Quality and Rights"
                  subtitle="Efficacy and operations of systems are dependent on good data"
                ></VerticalLineText>
                {/* </BodyCopy> */}
              </div>
            </TextHeadline>
          </div>
        </Column>
      </Row>
      <Row
        style={{
          backgroundColor: "#2F2D34",
          padding: "4% 0",
          margin: "auto",
          marginBottom: "80px",
        }}
      >
        <Column style={{ alignItems: "center" }}>
          <Headline2 style={{ color: "white" }}>Get Involved</Headline2>
          <LargeBody
            style={{
              color: "white",
              width: "65%",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            For more information, please email us at
            certification@ai-global.org, or sign up to become a member of AI
            Global. You can also join our mailing list to stay informed on the
            progress.
          </LargeBody>

          <PrimaryBtn>Become a Member </PrimaryBtn>
        </Column>
      </Row>
    </Layout>
  );
}

export default Certification;
