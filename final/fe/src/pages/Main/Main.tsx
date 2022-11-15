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
import { initStu } from "../../apis/redux/stuSlice";
import formDataType from "../../apis/dataTypes";
let tempData: formDataType[] = [];

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [unloginAlert, setUnloginAlert] = useState<boolean>(false);
  const [stuInfos, setStuInfos] = useState<formDataType[]>(useAppSelector(state => state.student));

  axios.get("/api/stu/list")
  .then(res => {
    console.log("/api/stu/list success: ", res.data);
    const { code, total, list } = res.data;
    if (code === -1) {
      console.log(code);
      tempData = list;
      setUnloginAlert(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      console.log(code, total, list);
      dispatch(initStu(list));
      tempData = list;
    }
  })
  .catch(err => console.log(err));

  useEffect(() => {
    setStuInfos([...tempData]);
  }, [tempData]);

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