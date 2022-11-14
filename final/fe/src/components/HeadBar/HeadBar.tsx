import React, { FC } from "react";
import axios from "axios";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Avatar, Dropdown, MenuProps } from "antd";
import "antd/dist/antd.css";
import "./HeadBar.css";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const HeadBar: FC = () => {
  const navigate = useNavigate();

  const logOut = () => {
    axios.post("/api/user/logout")
    .then(res => {
      console.log("Axios Success: ", res.data);
      const { code, message } = res.data;
      if (code === 0) {
        console.log(message);
        navigate("/");
      }
    })
    .catch(err => console.log("error: ", err));
  };

  const items: MenuProps["items"] = [
    {
      label: <a onClick={logOut}>退出登录</a>,
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
