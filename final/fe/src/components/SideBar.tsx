import React, { FC, useState } from "react";
import { TeamOutlined, AlertOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import type { MenuProps } from "antd";
import "antd/dist/antd.css";
import "../styles/styles.css";
import { Link } from "react-router-dom";

interface IProps {
  keki: string;
}

const SideBar: FC<IProps> = ({keki}) => {
  const sideList = ["人员管理", "关于"];
  const pathList = ["system", "about"];

  const items: MenuProps["items"] = [TeamOutlined, AlertOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `${key}`,
      icon: React.createElement(icon),
      label: <Link to={`/${pathList[index]}`}>{sideList[index]}</Link>,
    };
  });

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      className="sider" style={{height: "92vh"}} width={150} collapsedWidth={60}
      collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}
    >
      <Menu
        mode="inline" theme="dark"
        defaultSelectedKeys={[keki]}
        items={items}
      />
    </Sider>
  );
};

export default SideBar;
