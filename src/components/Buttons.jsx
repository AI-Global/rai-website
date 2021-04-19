import styled from "styled-components"

/* Font colors */
const carbon = "#2f2d34";
const blanco = "#ffffff";
const stone = "#4d5052";
const ghost = "#f6f6f6";

export const PrimaryBtn = styled.button`
  background: ${(props) => (props.dark ? carbon : blanco)};
  color: ${(props) => (props.dark ? blanco : carbon)};
  font-style: normal;
  font-weight: 500px !important;
  font-size: ${(props) => (props.small ? "16px" : "18px")};
  line-height: ${(props) => (props.small ? "24px" : "28px")};
  text-align: center;
  display: inline-block;
  padding: ${(props) =>
    props.small ? "12px 20px 12px 20px" : "14px 30px 14px 30px"};
  cursor: pointer;
  border: none;
  width: fit-content;
  margin-bottom: 12px;

  &:hover,
  :active {
    background: ${(props) => (props.dark ? stone : ghost)};
  }

  @media screen and (max-width: 800px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const SecondaryBtn = styled.button`
  background: ${(props) => (props.dark ? carbon : blanco)};
  color: ${(props) => (props.dark ? blanco : carbon)};
  font-style: normal;
  font-weight: 500px !important;
  font-size: ${(props) => (props.small ? "16px" : "18px")};
  line-height: ${(props) => (props.small ? "24px" : "28px")};
  text-align: center;
  display: inline-block;
  padding: ${(props) =>
    props.small ? "12px 20px 12px 20px" : "14px 30px 14px 30px"};
  cursor: pointer;
  border: 1px solid ${(props) => (props.dark ? blanco : carbon)};
  width: fit-content;
  margin-bottom: 12px;

  &:hover, :active {
    background: ${(props) => (props.dark ? stone : ghost)};
  }
`;