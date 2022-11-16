import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import "../../styles/styles.css";
import HeadBar from "../../components/HeadBar";
import SideBar from "../../components/SideBar";

const About = () => {
  return (
    <>
      <HeadBar />
      <Layout>
        <SideBar keki={"2"}/>
        <Content>
          <span className="about-text">1. 实现导航栏的折叠</span>
          <span className="about-text">2. 可按照年级对表单进行排序</span>
        </Content>
      </Layout>
    </>
  );
};

export default About;
