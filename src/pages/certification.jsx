import React from "react";
import Layout from "../components/Layout";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  Headline1,
  Headline2,
  Headline4,
  MediumBody,
  LargeBody,
  Heading1,
} from "../components/Text";
import { PrimaryBtn } from "../components/Buttons";
import {
  Jumbotron,
  JumboText,
  JumboImage,
  GrayPanel,
  Row,
} from "../components/Blocks";

function Certification() {
  return (
    <Layout title="Certification">
      <Jumbotron>
        <JumboText>
          <Headline1>
            RAI Certification
            <br /> Beta
          </Headline1>
          <MediumBody>
            <MediumBody>
              <strong>
                The world’s first independent, accredited certification program
                of its kind.
              </strong>
              <br />
              Developed under the Global AI Action Alliance for the World
              Economic
              <br /> Forum (WEF), along with a diverse community of leading
              experts, RAI
              <br /> certification is based on objective assessments of
              fairness, bias,
              <br /> explainability, and other concrete metrics of responsibly
              built AI
              <br /> systems. The Schwartz Reisman Institute for Technology and
              Society
              <br /> (SRI) at University of Toronto is serving as a business
              partner on the
              <br /> development phase of the initiative.
            </MediumBody>
          </MediumBody>
          <br />
        </JumboText>
        <JumboImage className="hero-image">
          <StaticImage
            src="../images/rai-icons/Badge.png"
            style={{
              position: "absolute",
              zIndex: "2",
              right: "170px",
              top: "217px",
            }}
            width={337}
            height={337}
            alt="badge-1"
          />
          <StaticImage
            src="../images/pictures/mask-1.png"
            style={{
              position: "absolute",
              zIndex: "1",
              right: "0px",
              top: "150px",
            }}
            width={919}
            height={500}
            alt="patient-2"
          />
        </JumboImage>
      </Jumbotron>
      <Row>
        <StaticImage
          src="../images/rai-content/Certification.png"
          style={{
            // position: "absolute",
            zIndex: "1",
            left: "auto",
          }}
          width={1116}
          height={634}
          alt="patient-2"
          style={{ objectFit: "scale-down" }}
        />
      </Row>
      <Jumbotron>
        <JumboText>
          <Headline2>Why RAI Certification?</Headline2>
          <MediumBody>
            <strong>Certify AI Systems, not individuals</strong>
            <br />
            Focus on the technology components and governance of systems.
            <br /> This is not a certification program for developers or data
            scientists.
            <br />
            <br /> <strong>Build on existing frameworks and regulations</strong>
            <br />
            Provide a practical and unified framework that translates across
            <br /> already-existing work from the industry. We are not trying to
            <br /> re-inventing the wheel.
            <br />
            <br /> <strong>Assessments specific to system type</strong>
            <br />
            Assessment criteria will be customized based on the type of AI
            system
            <br /> being assessed (e.g., Intelligent process automation, Image &
            Object
            <br /> recognition, Text & Speech Analysis, Advanced data analytics,
            NLP &<br /> content creation)
            <br />
            <br /> <strong>Assessments specific to domain and region</strong>
            <br />
            In order to have meaningful substance, assessment criteria will also
            <br /> cover specific application domains (e.g., credit &
            collections,
            <br /> healthcare diagnostics, etc.), and regions.
          </MediumBody>
          <br />
        </JumboText>
        <GrayPanel>
          <Heading1>
            Areas of RAI Certification Beta Working
            <br /> Group
            <br />
          </Heading1>
          <LargeBody bordered style={{ marginBottom: "40px" }}>
            Fair Lending
          </LargeBody>
          <LargeBody bordered style={{ marginBottom: "40px" }}>
            Fraud Detection
          </LargeBody>

          <LargeBody bordered style={{ marginBottom: "40px" }}>
            Automated Diagnosis and Treatment
          </LargeBody>
          <LargeBody bordered style={{ marginBottom: "40px" }}>
            Automated Hiring
          </LargeBody>
        </GrayPanel>
      </Jumbotron>
      <Row
        style={{
          padding: "3%",
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: "1px",
          marginLeft: "4%",
          marginRight: "4%",
          marginBottom: "80px",
        }}
      >
        <Headline4>Certification Working Groups</Headline4>
        <MediumBody>
          Recognizing that a project of this magnitude needs to be built by the
          community for the benefit of the community, we launched the RAI
          Certification Working Group December 2020 with WEF and SRI. Following
          the kick-off we had an outpouring of support and interest in this work
          which led to numerous discussions with technical, data, governance,
          ethics, and industry experts. As such, we’ve decided to create not
          one, but five working groups based on our areas of focus. We can use
          any and all expertise to improve work done to date. Join us by signing
          up for one of the following working groups: Fair Lending, Fraud
          Detection, Automated Diagnosis and Treatment, Automated Hiring. To
          join a working group, please contact us.{" "}
        </MediumBody>
        <div style={{width:"100%", textAlign:"center"}}>
          <PrimaryBtn dark>Join a working group</PrimaryBtn>{" "}
        </div>
      </Row>

      <Row
        dark
        style={{
          marginBottom: "206px",
          marginLeft: "115px",
          marginRight: "115px",
          textAlign: "center",
        }}
      >
        <Headline2 style={{ color: "white" }}>Get Involved</Headline2>
        <LargeBody
          style={{
            color: "white",
            marginBottom: "50px",
          }}
        >
          For more information, please email us at certification@ai-global.org,
          or <strong>sign up</strong> to
          <br /> become a member of AI Global. You can also join our mailing
          list to stay informed on the progress.
        </LargeBody>

        <PrimaryBtn onClick={() => navigate("/membership")}>
          Become a Member{" "}
        </PrimaryBtn>
      </Row>
    </Layout>
  );
}

export default Certification;
