import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.div`
  margin: 0;
  padding: 40px 100px 40px 100px;

  @media screen and (max-width: 585px) {
    padding: 35px 35px 45px 35px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1030px) {
    .logo {
      width: 215.11px;
      height: 49px;
    }
  }
`;

const Navigation = styled.div`
  display: flex;
  min-width: 50%;
  justify-content: space-between;

  @media screen and (max-width: 1150px) {
    min-width: 60%;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Option = styled.div`
  padding: 15px 0px 15px 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover div {
    display: block;
  }

  ${(props) =>
    props.animate &&
    css`
      &:hover div:nth-of-type(1) {
        width: 100%;
      }
    `}
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 140px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
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

  a:hover {
    background-color: #f6f6f6;
  }
`;

const Link = styled.a`
  text-decoration: ${(props) => (props.highlight ? "underline" : "none")};
  font-style: normal;
  font-weight: ${(props) => (props.highlight ? "bold" : "normal")};
  font-size: ${(props) => (props.small ? "14px" : "16px")};
  line-height: ${(props) => (props.small ? "18px" : "28px")};
  color: #2f2d34;
  margin-bottom: ${(props) => (props.small ? "10px" : "5px")};
`;

const Line = styled.div`
  width: 0px;
  height: 2px;
  background-color: #2f2d34;
  transition: 0.3s;
`;

const CollapseContainer = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    min-height: 20px;
  }
`;

const SlideAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(15px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
`;

const Menu = styled.div`
  min-width: 20%;
  padding: 50px 80px 105.4px 80px;
  height: 100%;
  top: 0;
  bottom: 0;
  background-color: #f6f6f6;
  position: absolute;
  z-index: 10;
  right: 0;
  display: flex;
  flex-direction: column;
  animation: ${SlideAnimation} ease 0.3s;

  @media screen and (min-width: 1000px) {
    display: none;
  }

  @media screen and (max-width: 585px) {
    padding: 50px 35px 105.4px 35px;
  }
`;

const Break = styled.hr`
  width: 100%;
  height: 2px;
  color: #2f2d34;
`;

function Collapse() {
  const [show, setShow] = useState(false);
  return (
    <>
      <CollapseContainer>
        {!show && (
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setShow(true);
            }}
          >
            <StaticImage src="../images/icons/hamburger.png" alt="hamburger" quality={100}/>
          </a>
        )}
      </CollapseContainer>
      {show && (
        <Menu>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setShow(false);
            }}
            style={{ alignSelf: "flex-end", marginBottom: "20px" }}
          >
            <StaticImage
              src="../images/icons/exit.png"
              alt="exit"
              width={22.77}
              height={22.76}
            />
          </a>
          <Link href="/rail" highlight>
            RAIL Certification
          </Link>
          <Link href="/rail" small>
            Why RAIL?
          </Link>
          <Link href="/rail" small>
            RAIL Rating System
          </Link>
          <Link href="/rail" small>
            RAIL Certification
          </Link>
          <Link href="/rail" small>
            RAIL Case Study
          </Link>
          <Link href="/rail" small>
            FAQ
          </Link>
          <Break />
          <Link href="/tools" highlight>
            Tools
          </Link>
          <Link href="/rail" small>
            Why RAIL?
          </Link>
          <Link href="/rail" small>
            RAIL Rating System
          </Link>
          <Link href="/rail" small>
            RAIL Certification
          </Link>
          <Link href="/rail" small>
            RAIL Case Study
          </Link>
          <Link href="/rail" small>
            FAQ
          </Link>
          <Break />
          <Link href="/news" highlight>
            News
          </Link>
          <Link href="/rail" small>
            Why RAIL?
          </Link>
          <Link href="/rail" small>
            RAIL Rating System
          </Link>
          <Break />
          <Link href="/rai" highlight>
            About RAI
          </Link>
          <Link href="/rail" small>
            Why RAIL?
          </Link>
          <Link href="/rail" small>
            RAIL Rating System
          </Link>
          <Break />
          <Link href="/membership" highlight>
            Become a Member
          </Link>
        </Menu>
      )}
    </>
  );
}

function Navbar() {
  return (
    <Container>
      <NavContainer>
        <a href="/">
          <StaticImage
            src="../images/rai-icons/rai-logo-text.png"
            alt="rai-logo"
            className="logo"
            quality={100}
          />
        </a>
        <Navigation>
          <Option animate>
            <Link href="/rail">RAIL Certification</Link>
            <Line />
            <Dropdown>
              <a href="/">Why RAIL</a>
              <a href="/">RAIL Rating System</a>
              <a href="/">RAIL Certification</a>
              <a href="/">RAIL Case Study</a>
              <a href="/">FAQ</a>
            </Dropdown>
          </Option>
          <Option animate>
            <Link href="/rail">Tools</Link>
            <Line />
            <Dropdown>
              <a href="/">Why RAIL</a>
              <a href="/">RAIL Rating System</a>
              <a href="/">RAIL Certification</a>
              <a href="/">RAIL Case Study</a>
              <a href="/">FAQ</a>
            </Dropdown>
          </Option>
          <Option animate>
            <Link href="/rail">News</Link>
            <Line />
            <Dropdown>
              <a href="/">Why RAIL</a>
              <a href="/">RAIL Rating System</a>
              <a href="/">RAIL Certification</a>
            </Dropdown>
          </Option>
          <Option animate>
            <Link href="/rail">About RAI</Link>
            <Line />
            <Dropdown>
              <a href="/">Why RAIL</a>
              <a href="/">RAIL Rating System</a>
              <a href="/">RAIL Certification</a>
              <a href="/">RAIL Case Study</a>
              <a href="/">FAQ</a>
            </Dropdown>
          </Option>
          <Option>
            <Link href="/rail" highlight>
              Become a Member
            </Link>
          </Option>
        </Navigation>
        <Collapse />
      </NavContainer>
    </Container>
  );
}

export default Navbar;
