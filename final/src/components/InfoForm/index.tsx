import React, { FC } from "react";
import { Avatar, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./index.css";
import { formDataType } from "../../apis/dataTypes";


const columns: ColumnsType<formDataType> = [
//   {
//     title: "头像",
//     dataIndex: "avatar",
//     key: "avatar",
//     render: avatar => <Avatar src={require(avatar)}/>,
//   },

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
    dataIndex: "sex",
    key: "sex",
    render: sex => {
        let color = "red";
        if (sex === "男") {
            color = "blue";
        }
        return (
            <Tag color={color} key={sex}>
            {sex}
            </Tag>
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
    key: "address",
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: formDataType[] = [
  {
    key: "1",
    // avatar:
    name: "John Brown",
    major: "CS",
    year: "2022",
    sex: "男",
    phone: 111,
    mail: "google"

  },
];

const InfoForm: FC = () => <Table columns={columns} dataSource={data} className="data-form" />;

export default InfoForm;