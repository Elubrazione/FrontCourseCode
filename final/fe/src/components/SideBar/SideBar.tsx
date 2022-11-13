import React, { FC } from "react";
import { TeamOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import type { MenuProps } from "antd";
import "antd/dist/antd.css";
import "./SideBar.css";

const SideBar: FC = () => {
  const items: MenuProps["items"] = [TeamOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: "人员管理",
    };
  });

  return (
    <Sider className="sider">
      <Menu
        mode="inline"
        defaultSelectedKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items}
      />
    </Sider>
  );
};

export default SideBar;
