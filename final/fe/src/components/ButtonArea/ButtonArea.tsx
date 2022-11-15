import React, { FC } from "react";
import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ModalOut from "../ModalOut";
import "./ButtonArea.css";
import formDataType from "../../apis/dataTypes";
import axios from "axios";

interface IProps {
  stuInfos: formDataType[];
  updateStuInfos: Function;
};

const ButtonArea: FC<IProps> = ({stuInfos, updateStuInfos}) => {
  const { Search } = Input;

  const onSearch = (value: string) => {
    value = value.replace(/(^\s*)|(\s*$)/g, "");
    if (value === "") {
      console.log(true);
      axios.get("/api/stu/list")
      .then(res => {
        console.log(res.data.list);
        updateStuInfos(res.data.list);
      })
      .catch(err => console.log(err));
      return stuInfos;
    };
    const nameList: string[] = [];
    for(let i=0; i<stuInfos.length; i++) {
      nameList.push(stuInfos[i].name);
    }
    console.log(value);
    console.log(nameList);
    const arr = [];
    for (let i = 0; i < stuInfos.length; i++) {
      if (nameList[i].split(value).length > 1) {
        console.log(nameList[i].split(value));
        arr.push(stuInfos[i]);
      }
    }
    console.log("search:", arr);
    updateStuInfos(arr);
    return arr;
  };

  const clearStuInfos = () => {
    updateStuInfos([]);
    axios.post("/api/stu/clear")
    .then(res => {
      console.log(res.data.list);
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="selector-container">
      <ModalOut
        clickButton={true}
        text="添加"
        icon={<PlusOutlined />}
        modalTitle="添加用户"
        stuInfos={stuInfos}
        updateStuInfos={updateStuInfos}
      />
      <Search
        placeholder="姓名"
        allowClear
        enterButton="搜索"
        size="middle"
        onSearch={onSearch}
      />
      <Button onClick={clearStuInfos}>重置</Button>
    </div>
  );
};

export default ButtonArea;
