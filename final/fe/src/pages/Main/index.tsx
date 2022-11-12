import React from "react";
import SideBar from "../../components/SideBar";
import InfoForm from "../../components/InfoForm";
import DataSelect from "../../components/DataSelect";
import HeadBar from "../../components/HeadBar";
import "./index.css";
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