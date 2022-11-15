import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../../components/SideBar/SideBar";
import HeadBar from "../../components/HeadBar/HeadBar";
import "./Main.css";
import { Alert, Layout } from "antd";
import InfoTable from "../../components/InfoTable/InfoTable";
import ButtonArea from "../../components/ButtonArea/ButtonArea";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../apis/redux/store";
import formDataType from "../../apis/dataTypes";
import { selectStudents, setStu } from "../../apis/redux/stuSlice";

let tempData: formDataType[] = [];

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [unloginAlert, setUnloginAlert] = useState<boolean>(false);
  const [stuInfos, setStuInfos] = useState<formDataType[]>(useAppSelector(selectStudents));
  console.log("get from store: ", stuInfos);

  useEffect(() => {
    axios.get("/api/stu/list")
    .then(res => {
      console.log(res.data.list);
      tempData = res.data.list;
    })
    .catch(err => console.log(err));
  }, []);

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
        dispatch(setStu(tempData));
        setStuInfos(tempData);
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
          <ButtonArea />
          { unloginAlert?
            <Alert
              message="错误"
              description="请先登录！"
              type="error"
              showIcon
            />:
            <InfoTable stuInfos={stuInfos}/>
          }
        </Layout>
      </Layout>
    </>
  );
};

export default Main;