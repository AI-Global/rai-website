import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

import {
  Headline1,
  Headline2,
  Headline4,
  Headline5,
  MediumBody,
  SmallBody,
} from "../components/Text";

const JumboContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 1190px) {
    flex-direction: column;

    img {
      margin-top: 500px;
      right: 0;
      width: 100vw;
      height: auto;
    }
  }

  @media screen and (max-width: 800px) {
    img {
      margin-top: 430px;
    }
  }

  @media screen and (max-width: 450px) {
    img {
      margin-top: 500px;
    }
  }

  @media screen and (max-width: 400px) {
    img {
      margin-top: 550px;
      height: 40vh;
      width: auto;
    }
  }

  @media screen and (max-width: 350px) {
    img {
      margin-top: 620px;
    }
  }
`;
const JumboText = styled.div`
  min-width: 50%;
  z-index: 5;

  @media screen and (max-width: 1190px) {
    display: flex;
    flex-direction: column;

    button {
      align-self: center;
    }
  }

  @media screen and (max-width: 710px) {
    br {
      display: none;
    }
    button {
      margin-top: 10px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 80px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

const Line = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid #000000;
  margin: 3px;
  display: inline-block;
`;

const PImage = styled.div`
  display: flex;
  flex-direction: column;
  width: "20%";
`;

const PDescription = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const ToolBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid black;
  flex: 1;
  padding: 1em;
  margin: 1em;
  height: 100%;
`;
function Tools() {
  return (
    <Layout title="Tools">
      <JumboContainer style={{ marginBottom: "150px" }}>
        <JumboText>
          <Headline1>
            Programs and
            <br /> Resources for Putting
            <br />
            Responsible AI <br />
            Principles into Action
          </Headline1>
          <MediumBody>
            RAI is defining responsible AI with an independent, authoritative
            certification
            <br /> program, and practical guidance on data rights, privacy,
            security,
            <br /> explainability, and fairness in AI systems.
          </MediumBody>
          <br />
        </JumboText>

        <StaticImage
          src="../images/pictures/bike-1.png"
          style={{
            position: "absolute",
            zIndex: "4",
            right: "0",
            top: "134px",
          }}
          width={1197}
          height={670}
          alt="patient-1"
        />
        <StaticImage
          src="../images/pictures/bike-2.png"
          style={{
            position: "absolute",
            zIndex: "3",
            right: "0",
            top: "162px",
          }}
          width={1197}
          height={670}
          alt="patient-2"
        />
      </JumboContainer>
      <Row
        style={{
          backgroundColor: "#f6f6f6",
          padding: "5% 3%",
          alignItems: "center",
        }}
      >
        <Headline2 style={{ marginBottom: "20px" }}>Programs</Headline2>
        <Line />
        <Row style={{ margin: "30px 0" }}>
          <PImage>
            {" "}
            <StaticImage
              src="../images/rai-icons/Badge.png"
              alt="RAI logo"
              objectFit="contain"
              width="188px"
              height="188px"
              style={{ maxHeight: "70%", maxWidth: "70%" }}
            />
          </PImage>
          <PDescription>
            <Headline4>
              RAIL Certification BETA is the world’s first independent,
              accredited certification program of its kind.
            </Headline4>
            <MediumBody>
              Developed under the Global AI Action Alliance for the World
              Economic Forum (WEF), along with a diverse community of leading
              experts, RAIL certification is based on objective assessments of
              fairness, bias, explainability, and other concrete metrics of
              responsibly built AI systems. The Schwartz Reisman Institute for
              Technology and Society (SRI) at University of Toronto is serving
              as a business partner on the development phase of the initiative.
              The result is a measurable, independent, authoritative
              certification program working across sectors and across regions
              around the world.
              <br />
              <br />
              <a href="/certification">Get Started</a>
            </MediumBody>
          </PDescription>
        </Row>
        <Row style={{ margin: "30px 0" }}>
          <PImage>
            {" "}
            <StaticImage
              src="../images/rai-icons/Fellowship.png"
              alt="Fellowship icon"
              objectFit="contain"
              width="188px"
              height="188px"
              style={{ maxHeight: "70%", maxWidth: "70%" }}
            />
          </PImage>
          <PDescription>
            <Headline4>
              Responsible AI Fellowship Program (TBA) invites multidisciplinary
              teams of students and professionals to tackle real-world
              challenges.
            </Headline4>
            <MediumBody>
              This program will support multidisciplinary teams of students and
              professionals selected from various universities and businesses to
              work on real-world responsible AI challenges and opportunities.
              Projects are sourced from AI Global Members and external clients
              who play an important role in structuring project deliverables.
              Fellows work with domain experts in AI, data science,
              human-centric design, law, and regulatory policy. Fellows receive
              training in research skills and data collection, analysis, and
              presentation to deliver a work product that meets client needs.
              <br />
              <br />
              <a href="/rail">Get Started</a>
            </MediumBody>
          </PDescription>
        </Row>
      </Row>

      <div>
        <Headline2 style={{ marginBottom: "20px" }}>Tools</Headline2>
        <Row>
          <ToolBox>
            <StaticImage
              src="../images/rai-icons/design-assistant.png"
              alt="Design Assistant"
              objectFit="contain"
            />
            <Headline5>
              {" "}
              Responsible AI Design Assistant assesses work in development, to
              anticipate problems and future-proof AI systems.
            </Headline5>
            <SmallBody>
              Access research and industry best practices to assess key
              challenges, including data rights and use, privacy, security,
              explainability, fairness, bias, and robustness.
              <br />
              <br /><br/>
              <a href="/rail">Get Started</a>
            </SmallBody>
          </ToolBox>
          <ToolBox>
            <StaticImage
              src="../images/rai-icons/Portal.png"
              alt="Portal icon"
              objectFit="contain"
            />
            <Headline5>
              {" "}
              Responsible AI Community Portal provides access to a curated
              library of trusted resources.
            </Headline5>
            <SmallBody>
              The Community Portal is an open resource hub providing access to
              responsible AI standards, models, government policies, open
              datasets, and open-source software to help members better navigate
              the AI landscape and directly connect with the experts who are
              guiding...
              <br />
              <br />
              <a href="/rail">Get Started</a>
            </SmallBody>
          </ToolBox>
          <ToolBox>
            <StaticImage
              src="../images/rai-icons/Portal.png"
              alt="Portal icon"
              objectFit="contain"
            />
          </ToolBox>
        </Row>
      </div>
    </Layout>
  );
}

export default Tools;
