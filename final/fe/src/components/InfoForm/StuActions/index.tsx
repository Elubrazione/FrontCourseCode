import { Dropdown, MenuProps } from "antd";
import React, { FC } from "react";
import { SettingOutlined } from "@ant-design/icons";
import "./index.css";
import ModalOut from "../../ModalOut";

const items: MenuProps["items"] = [
  {
    key: "0",
    label: "查看",
  },
  {
    key: "1",
    label: (<ModalOut clickButton={false} text="编辑" modalTitle="编辑用户" />),
  },
  {
    key: "2",
    label: "删除",
  },
];

const StuActions: FC = () => {
  return (
    <Dropdown menu={{ items }} placement="bottom">
      <div className="setting-border">
        <SettingOutlined />
      </div>
    </Dropdown>
  );
};

export default StuActions;