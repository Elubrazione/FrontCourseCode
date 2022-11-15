import React, { FC } from "react";
import axios from "axios";
import { UserOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Layout, Avatar, Dropdown, MenuProps, Modal } from "antd";
import "antd/dist/antd.css";
import "./HeadBar.css";
import { useNavigate } from "react-router-dom";
import formDataType from "../../apis/dataTypes";

const { Header } = Layout;

const HeadBar: FC = () => {
  const navigate = useNavigate();

  const confirm = () => {
    Modal.confirm({
      title: "提示",
      icon: <ExclamationCircleOutlined />,
      content: "请确认是否要退出",
      okText: "确认",
      cancelText: "取消",
      onOk: logOut
    });
  };

  const logOut = () => {
    axios.post("/api/user/logout")
    .then(res => {
      console.log("Axios Success: ", res.data);
      const { code, message } = res.data;
      if (code === 0) {
        console.log(message);
        // dispatch(initStu([]));
        navigate("/");
      }
    })
    .catch(err => console.log("error: ", err));
  };

  const items: MenuProps["items"] = [
    {
      label: <a onClick={confirm}>退出登录</a>,
      key: "0",
    },
  ];

  return (
    <Header className="header" style={{height: "8vh"}}>
      <span className="header-text">人员管理系统</span>
      <div className="user">
        <span className="header-username">admin</span>
        <Dropdown menu={{items}} arrow={true} placement="bottom">
          <Avatar
            size="small"
            className="header-avatar"
            icon={<UserOutlined />}
          />
        </Dropdown>
      </div>
    </Header>
  );
};

export default HeadBar;
