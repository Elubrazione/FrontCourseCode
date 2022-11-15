import React, { FC } from "react";
import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ModalOut from "../ModalOut";
import "./ButtonArea.css";
import { useAppDispatch } from "../../apis/redux/store";
import { toggleStu } from "../../apis/redux/stuSlice";

const ButtonArea: FC = () => {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  const dispatch = useAppDispatch();

  const clearStuInfos = () => {
    dispatch(toggleStu([]));
  };

  return (
    <div className="selector-container">
      <ModalOut
        clickButton={true}
        text="添加"
        icon={<PlusOutlined />}
        modalTitle="添加用户"
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
