import React, { FC } from "react";
import { faker } from "@faker-js/faker";
import { Avatar, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { formDataType } from "../../apis/dataTypes";
import StuActions from "./StuActions";
import "./index.css";

// const handleMenuClick: MenuProps["onClick"] = e => {
//   message.info("Click on menu item.");
//   console.log("click", e);
// };

// const menuProps = {
//   items,
//   onClick: handleMenuClick,
// };

const columns: ColumnsType<formDataType> = [
  {
    title: "头像",
    dataIndex: "avatar",
    key: "avatar",
    render: avatar => <Avatar shape="square" src={avatar} className="info"/>,
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
    dataIndex: "sex",
    key: "sex",
    render: sex => {
        let color = "red";
        if (sex === "男") {
            color = "blue";
        }
        return (
            <Tag color={color} key={sex}>{sex}</Tag>
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
    render: () => <StuActions />,
  },
];

const data: formDataType[] = [
  {
    key: "1",
    avatar: faker.image.abstract(),
    name: "John Brown",
    major: "CS",
    year: "2022",
    sex: "男",
    phone: 111,
    mail: "google"
  },
  {
    key: "2",
    avatar: faker.image.abstract(),
    name: "John Brown",
    major: "CS",
    year: "2022",
    sex: "男",
    phone: 111,
    mail: "google"
  },
  {
    key: "3",
    avatar: faker.image.abstract(),
    name: "John Brown",
    major: "CS",
    year: "2022",
    sex: "女",
    phone: 111,
    mail: "google"
  },
  {
    key: "4",
    avatar: faker.image.abstract(),
    name: "John Brown",
    major: "CS",
    year: "2022",
    sex: "男",
    phone: 111,
    mail: "google"
  },
  {
    key: "5",
    avatar: faker.image.abstract(),
    name: "John Brown",
    major: "CS",
    year: "2022",
    sex: "女",
    phone: 111,
    mail: "google"
  },
];

const InfoForm: FC = () => <Table columns={columns} dataSource={data} className="data-form" />;

export default InfoForm;