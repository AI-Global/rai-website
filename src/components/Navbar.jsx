import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.div`
  margin: 0;
  padding: 40px 100px 40px 100px;
`;

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.div`
  display: flex;
  min-width: 50%;
  justify-content: space-between;
`;

const Option = styled.div`
    padding: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover div{
        display: block;
    }
`

const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 140px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-top: 40px;
  text-align: start;

  a {
    font-weight: normal;
    color: black;
    padding: 5px 16px;
    text-decoration: none;
    display: block;
    font-size: 12px;
  }

 a:hover{
      background-color: #f6f6f6;
  }
`;

const Link = styled.a`
  text-decoration: ${(props) => (props.member ? "underline" : "none")};
  font-style: normal;
  font-weight: ${(props) => (props.member ? "bold" : "normal")};
  font-size: 16px;
  line-height: 28px;
  color: #2f2d34;

  &:hover{
      color: #4d5052;
  }
`;


function Navbar() {
  return (
    <Container>
      <NavContainer>
        <a href="/">
          <StaticImage
            src="../images/rai-icons/rai-logo-text.png"
            alt="rai-logo"
          />
        </a>
        <Navigation>
          <Option>
            <Link href="/rail">RAIL Certification</Link>
            <Dropdown>
              <a href="#">Why RAIL</a>
              <a href="#">RAIL Rating System</a>
              <a href="#">RAIL Certification</a>
              <a href="#">RAIL Case Study</a>
              <a href="#">FAQ</a>
            </Dropdown>
          </Option>
          <Option>
            <Link href="/rail">Tools</Link>
            <Dropdown>
              <a href="#">Why RAIL</a>
              <a href="#">RAIL Rating System</a>
              <a href="#">RAIL Certification</a>
              <a href="#">RAIL Case Study</a>
              <a href="#">FAQ</a>
            </Dropdown>
          </Option>
          <Option>
            <Link href="/rail">News</Link>
            <Dropdown>
              <a href="#">Why RAIL</a>
              <a href="#">RAIL Rating System</a>
              <a href="#">RAIL Certification</a>
              <a href="#">RAIL Case Study</a>
              <a href="#">FAQ</a>
            </Dropdown>
          </Option>
          <Option>
            <Link href="/rail">About RAI</Link>
            <Dropdown>
              <a href="#">Why RAIL</a>
              <a href="#">RAIL Rating System</a>
              <a href="#">RAIL Certification</a>
              <a href="#">RAIL Case Study</a>
              <a href="#">FAQ</a>
            </Dropdown>
          </Option>
          <Option>
            <Link href="/rail" member>Become a Member</Link>
            <Dropdown>
              <a href="#">Why RAIL</a>
              <a href="#">RAIL Rating System</a>
              <a href="#">RAIL Certification</a>
              <a href="#">RAIL Case Study</a>
              <a href="#">FAQ</a>
            </Dropdown>
          </Option>
        </Navigation>
      </NavContainer>
    </Container>
  );
}

export default Navbar;
