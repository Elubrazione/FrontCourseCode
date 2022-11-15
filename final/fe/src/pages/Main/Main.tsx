import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../../components/SideBar/SideBar";
import HeadBar from "../../components/HeadBar/HeadBar";
import "./Main.css";
import { Alert, Layout } from "antd";
import InfoTable from "../../components/InfoTable/InfoTable";
import ButtonArea from "../../components/ButtonArea/ButtonArea";
import { useNavigate } from "react-router-dom";
import formDataType from "../../apis/dataTypes";

const Main = () => {
  const navigate = useNavigate();

  const [unloginAlert, setUnloginAlert] = useState<boolean>(false);
  const [stuInfos, setStuInfos] = useState<formDataType[]>([]);

  const updtStu = (values: formDataType[]) => {
    setStuInfos([...values]);
  };

  useEffect(() => {
    axios.get("/api/stu/info")
    .then(res => {
      console.log("/api/stu/info success: ", res.data);
      const { code, message } = res.data;
      if (code === -1) {
        console.log(message);
        setUnloginAlert(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        axios.get("/api/stu/list")
        .then(res => {
          console.log(res.data.list);
          setStuInfos(res.data.list);
        })
        .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <>
      <HeadBar />
      <Layout>
        <SideBar />
        <Layout className="info-main">
          <ButtonArea stuInfos={stuInfos} updateStuInfos={updtStu}/>
          { unloginAlert?
            <Alert
              message="错误"
              description="请先登录！"
              type="error"
              showIcon
            />:
            <InfoTable stuInfos={stuInfos} updateStuInfos={updtStu}/>
          }
        </Layout>
      </Layout>
    </>
  );
};

export default Main;