import React, { FC } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Avatar, Dropdown, MenuProps } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const { Header } = Layout;

const HeadBar: FC = () => {
  return (
    <Header className="header">
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

const items: MenuProps["items"] = [
  {
    label: "退出登录",
    key: "0",
  },
];
export default HeadBar;
