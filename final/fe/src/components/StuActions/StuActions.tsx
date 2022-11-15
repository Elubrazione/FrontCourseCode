import { Dropdown, MenuProps } from "antd";
import React, { FC } from "react";
import { SettingOutlined } from "@ant-design/icons";
import "./StuActions.css";
import ModalOut from "../ModalOut";
import { Link } from "react-router-dom";
import axios from "axios";

interface IProps {
  submitValues: any;
}

const StuActions: FC<IProps> = ({submitValues}) => {
  const deleteStu = () => {
    axios.post("/api/stu/delete")
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: <Link to="/detail">查看</Link>,
    },
    {
      key: "1",
      label: (<ModalOut clickButton={false} text="编辑" modalTitle="编辑用户" submitValues={submitValues}/>),
    },
    {
      key: "2",
      label: (<a onClick={deleteStu}>删除</a>),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottom">
      <div className="setting-border">
        <SettingOutlined />
      </div>
    </Dropdown>
  );
};

export default StuActions;