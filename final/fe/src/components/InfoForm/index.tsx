import React, { FC } from "react";
import { faker } from "@faker-js/faker";
import type { MenuProps } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { formDataType } from "../../apis/dataTypes";
import "./index.css";

const items: MenuProps["items"] = [
  {
    label: "查看",
    key: "0",
  },
  {
    label:"编辑",
    key: "1",
  },
  {
    label: "删除",
    key: "2",
  },
];

const columns: ColumnsType<formDataType> = [
  {
    title: "头像",
    dataIndex: "avatar",
    key: "avatar",
    render: avatar => <Avatar shape="square" src={avatar} size={58} />,
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
        <Dropdown menu={{ items }}>
          <div className="setting-border">
            <SettingOutlined />
          </div>
        </Dropdown>
    ),
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