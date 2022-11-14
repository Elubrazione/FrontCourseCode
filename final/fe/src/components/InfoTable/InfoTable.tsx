import React, { FC } from "react";
import { faker } from "@faker-js/faker";
import { Image, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { formDataType } from "../../apis/dataTypes";
import StuActions from "../StuActions/StuActions";
import "./InfoTable.css";

const data: formDataType[] = [
  {
    key: "1",
    avatar: faker.image.abstract(),
    name: "John Brown",
    major: "CS",
    year: "2022",
    gender: "男",
    phone: 111,
    mail: "google"
  },
  {
    key: "2",
    avatar: faker.image.abstract(),
    name: "John Brown",
    major: "CE",
    year: "2022",
    gender: "男",
    phone: 111,
    mail: "google"
  },
  {
    key: "3",
    avatar: faker.image.abstract(),
    name: "John Brown",
    major: "CS",
    year: "2022",
    gender: "女",
    phone: 111,
    mail: "google"
  },
  {
    key: "4",
    avatar: faker.image.abstract(),
    name: "John Brown",
    major: "CS",
    year: "2022",
    gender: "男",
    phone: 111,
    mail: "google"
  },
  {
    key: "5",
    avatar: faker.image.abstract(),
    name: "John Brown",
    major: "CS",
    year: "2022",
    gender: "女",
    phone: 111,
    mail: "google"
  },
];

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
    render: (_, record) => <StuActions submitValues={record}/>,
  },
];

const InfoTable: FC = () => <Table columns={columns} dataSource={data} className="data-form" />;

export default InfoTable;