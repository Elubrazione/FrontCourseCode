import React, { FC } from "react";
import { Image, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { formDataType } from "../../apis/dataTypes";
import StuActions from "../StuActions/StuActions";
import "./InfoTable.css";

interface IProps {
  stuInfos: formDataType[];
  updateStuInfos: Function;
}

const InfoTable: FC<IProps> = ({stuInfos, updateStuInfos}) => {
  const columns: ColumnsType<formDataType> = [
    {
      title: "头像",
      dataIndex: "avatar",
      key: "avatar",
      render: avatar => <Image src={avatar} className="info"/>,
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "专业",
      dataIndex: "major",
      key: "major",
    },
    {
      title: "年级",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "性别",
      dataIndex: "gender",
      key: "gender",
      render: gender => {
        let color = "red";
        if (gender === "男") {
          color = "blue";
        }
        return (
          <Tag color={color} key={gender}>{gender}</Tag>
        );}
    },
    {
      title: "电话",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "邮箱",
      dataIndex: "mail",
      key: "mail",
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) =>
        <StuActions
          submitValues={record} stuInfos={stuInfos}
          updateStuInfos={updateStuInfos}
        />,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={stuInfos}
      className="data-form"
      pagination={{pageSize: 5}}
    />
  );
};

export default InfoTable;