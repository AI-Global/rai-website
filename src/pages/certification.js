import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
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

function Headline1({children}) {
  return (<h1 style ={{fontFamily:'Libre Calson Text, serif', fontStyle:'normal', fontWeight: 'bold', fontSize:'60px', lineHeight:'69px'}}>{children}</h1>)
}

function Certification() {
  return (
    <Layout>
      <Navbar />
      <Content>
        <Row>
          <Column>
          <TextHeadline><Headline1 >Childen</Headline1></TextHeadline>
            </Column>
        </Row>
      </Content>
      <p>Hello there</p>
    </Layout>
  );
}

export default Certification;
