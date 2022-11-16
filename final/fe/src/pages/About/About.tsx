import { Layout } from "antd";
import React from "react";
import HeadBar from "../../components/HeadBar";
import SideBar from "../../components/SideBar";

const About = () => {
  return (
    <>
      <HeadBar />
      <Layout>
        <SideBar keki={"2"}/>
      </Layout>
    </>
  );
};

export default About;
