import React, { FC } from "react";
import { Image, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { formDataType } from "../../apis/dataTypes";
import StuActions from "./StuActions";
import "../../styles/styles.css";

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
      defaultSortOrder: "descend",
      sorter: (a, b) => Number(a.year.split("级")[0]) - Number(b.year.split("级")[0]),
    },
    {
      title: "性别",
      dataIndex: "gender",
      key: "gender",
      // filters: [
      //   {
      //     text: "男",
      //     value: "男",
      //   },
      //   {
      //     text: "女",
      //     value: "女",
      //   },
      // ],
      // filterMultiple: false,
      // onFilter: (value: string, record) => record.gender.indexOf(value) === 0,
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
      defaultSortOrder: "descend",
      sorter: (a, b) => a.phone - b.phone,
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