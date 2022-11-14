import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import HeadBar from "../../components/HeadBar/HeadBar";
import "./Main.css";
import { Layout } from "antd";
import InfoTable from "../../components/InfoTable/InfoTable";
import ButtonArea from "../../components/ButtonArea/ButtonArea";

const Main = () => {
  return (
    <>
      <HeadBar />
      <Layout>
        <SideBar />
        <Layout className="info-main">
          <ButtonArea />
          <InfoTable />
        </Layout>
      </Layout>
    </>
  );
};

export default Main;