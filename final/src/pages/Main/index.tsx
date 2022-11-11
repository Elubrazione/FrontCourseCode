import React from "react";
import SideBar from "../../components/SideBar";
import HeadBar from "../../components/HeadBar";
import "./index.css";
import { Layout } from "antd";

const { Header, Content, Sider } = Layout;

const Main = () => {
  return (
    <>
      <HeadBar />
      <Layout>
        <SideBar />
        <Layout className="info-main">
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Main;