import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import InfoForm from "../../components/InfoTable/InfoTable";
import DataSelect from "../../components/HeadOps/HeadOps";
import HeadBar from "../../components/HeadBar/HeadBar";
import "./Main.css";
import { Layout } from "antd";

const Main = () => {
  return (
    <>
      <HeadBar />
      <Layout>
        <SideBar />
        <Layout className="info-main">
          <DataSelect />
          <InfoForm />
        </Layout>
      </Layout>
    </>
  );
};

export default Main;