import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { navigate } from "gatsby";
import { Headline1, MediumBody } from "../components/Text";
import { PrimaryBtn } from "../components/Buttons";
import { StaticImage } from "gatsby-plugin-image";
import { JumboContainer, JumboText } from "../components/Jumbotron";

function IndexPage() {
  return (
    <Layout title="Home">
      <JumboContainer>
        <JumboText>
          <Headline1>
            Working Together <br /> for AI We Can Trust
          </Headline1>
          <MediumBody>
            Artificial Intelligence holds great potential and great peril. As
            practitioners <br /> and stakeholders, our choice is to build a
            future that either will — or will <br /> not — be trusted by
            everyone. The Responsible AI Institute is working to <br /> define
            responsible AI with practical tools and expert guidance on data
            <br />
            rights, privacy, security, explainability, and fairness.
          </MediumBody>
          <br />
          <PrimaryBtn dark onClick={() => navigate("/rail")}>
            Learn About RAIL Certification
          </PrimaryBtn>
        </JumboText>
        <StaticImage
          src="../images/pictures/patient-1.png"
          style={{
            position: "absolute",
            zIndex: "4",
            right: "0",
            top: "134px",
          }}
          width={1479}
          height={709}
          alt="patient-1"
        />
        <StaticImage
          src="../images/pictures/patient-2.png"
          style={{
            position: "absolute",
            zIndex: "3",
            right: "0",
            top: "162px",
          }}
          width={1177}
          height={618}
          alt="patient-2"
        />
        <StaticImage
          src="../images/pictures/patient-3.png"
          style={{
            position: "absolute",
            zIndex: "2",
            right: "0",
            top: "125px",
          }}
          width={1530}
          height={734}
          alt="patient-3"
        />
      </JumboContainer>
    </Layout>
  );
}

export default IndexPage;
