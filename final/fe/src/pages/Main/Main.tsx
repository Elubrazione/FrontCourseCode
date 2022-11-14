import React from "react";
import axios from "axios";
import SideBar from "../../components/SideBar/SideBar";
import HeadBar from "../../components/HeadBar/HeadBar";
import "./Main.css";
import { Layout } from "antd";
import InfoTable from "../../components/InfoTable/InfoTable";
import ButtonArea from "../../components/ButtonArea/ButtonArea";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  axios.get("/api/stu/info")
  .then(res => {
    console.log(res.data);
    const { code, message } = res.data;
    if (code === -1) {
      console.log(message);
      // todo: 加一个弹窗提示
      navigate("/");
    } else {
      // todo: 加一个弹窗提示
      console.log(message);
      axios.get("/api/stu/list")
      .then(res => {
        console.log(res.data);
        const { total, list } = res.data;
        console.log(total, list);
      })
      .catch(err => console.log(err));
    }
  })
  .catch(err => console.log(err));

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