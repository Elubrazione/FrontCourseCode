import { faker } from "@faker-js/faker";
import { Form, Input, Select, Button } from "antd";
import axios from "axios";
import { prefixSelector, suffixSelector } from "./selector";
import React, { FC } from "react";
import formDataType from "../../apis/dataTypes";
import "../../styles/styles.css";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const uuid = require("uuid").v4;
const { Option } = Select;

interface IProps {
  editVer: boolean;
  initialValue: any;
  handleOK: Function;
  handleCancel: Function;
  stuInfos: formDataType[];
  updateStuInfos: Function;
}

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 0 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "请输入学生的${label}",
  types: {
    email: "请输入正确的${label}地址",
  },
};

const SubmitForm: FC<IProps> = ({initialValue, handleOK, handleCancel, stuInfos, updateStuInfos}) => {
  console.log("ss:  ", stuInfos);

  const onFinish = (values: any) => {
    console.log(values);

    if (initialValue !== undefined) {
      const data = stuInfos.find(ele => ele?.key === initialValue.key);
      console.log(data);
      if (data !== undefined) {
        const stu = {
          key: initialValue.key,
          name: values.name,
          major: values.major,
          year: values.year,
          gender: values.gender,
          phone: values.phone,
          mail: values.mail,
          avatar: initialValue.avatar
        };
        // dispatch(toggleStu(stu));
        const index = stuInfos.indexOf(data);
        console.log("index: ", index);
        stuInfos[index] = stu;
        updateStuInfos(stuInfos);

        axios.post("/api/stu/update", {stu, index})
        .then(res => {
          console.log("/api/stu/update success: ", res.data);
        })
        .catch(err => console.log(err));
      };
    } else {
      const stu = {
        key: uuid(),
        name: values.name,
        major: values.major,
        year: values.year,
        gender: values.gender,
        phone: values.phone,
        mail: values.mail,
        avatar: faker.image.avatar()
      };
      updateStuInfos([stu, ...stuInfos]);
      // dispatch(addStu(stu));
      axios.post("/api/stu/create", stu)
      .then(res => {
        console.log("/api/stu/create success: ", res.data);
      })
      .catch(err => console.log(err));
    }
    handleOK();
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish}
          validateMessages={validateMessages}
          initialValues={initialValue}>

      <Form.Item name="name" label="姓名" rules={[{required: true}]}>
        <Input />
      </Form.Item>

      <Form.Item name="major" label="专业" rules={[{required: true}]}>
        <Input addonAfter={suffixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item name="year" label="年级" rules={[{required: true}]}>
        <Select
          placeholder="请下拉选择学生的年级（入学年份）"
          allowClear
        >
          <Option value="2019级">2019级</Option>
          <Option value="2020级">2020级</Option>
          <Option value="2021级">2021级</Option>
          <Option value="2022级">2022级</Option>
        </Select>
      </Form.Item>

      <Form.Item name="gender" label="性别" rules={[{required: true}]}>
        <Select
          placeholder="请下拉选择学生的性别"
          allowClear
        >
          <Option value="男">男</Option>
          <Option value="女">女</Option>
        </Select>
      </Form.Item>

      <Form.Item name="phone" label="电话" rules={[{required: true}]}>
      <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item name="mail" label="邮箱" rules={[{type: "email"}, {required: true}]}>
        <Input />
      </Form.Item>

      <Form.Item>
        <div className="modal-button">
          <Button onClick={() => handleCancel()}>
            取消
          </Button>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </div>
      </Form.Item>

    </Form>
  );
};

export default SubmitForm;