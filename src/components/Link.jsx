import React from "react";
import styled from "styled-components";
import {StaticImage} from "gatsby-plugin-image";

const LinkContainer = styled.div`
  display: flex;
  margin: 10px 0px 10px 0px;
  justify-content: space-between;
  cursor: pointer;
  width: fit-content;
`;

const CustomLink = styled.a`
  color: #2f2d34;
  font-size: 18px;
  line-height: 28px;
  font-style: normal;
  font-weight: normal;
  text-decoration-line: underline;
`;

function Link({ text, link, dark }) {
  return (
    <LinkContainer>
      <CustomLink href={link}>{text}</CustomLink>
      <StaticImage src="../images/icons/black-arrow-large.svg" width={15} alt="arrow"/>
    </LinkContainer>
  );
}

export default Link;
