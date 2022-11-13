import { Form, Input, Select } from "antd";
import React, { FC } from "react";
import { formDataType } from "../../../apis/dataTypes";
interface IProps {
  initialValue: any;
}

const { Option } = Select;

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

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }} disabled={true} defaultValue="86">
      <Option value="86">+86</Option>
    </Select>
  </Form.Item>
);

const suffixSelector = (
  <Form.Item name="suffix" noStyle>
    <Select style={{ width: 70 }} disabled={true} defaultValue="college">
      <Option value="college">学院</Option>
    </Select>
  </Form.Item>
);

const SubmitForm: FC<IProps> = ({initialValue}) => {
  const onFinish = (values: any) => {
    console.log(values);
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
          <Option value="y2019">2019级</Option>
          <Option value="y2020">2020级</Option>
          <Option value="y2021">2021级</Option>
          <Option value="y2022">2022级</Option>
        </Select>
      </Form.Item>

      <Form.Item name="gender" label="性别" rules={[{required: true}]}>
        <Select
          placeholder="请下拉选择学生的性别"
          allowClear
        >
          <Option value="male">男</Option>
          <Option value="female">女</Option>
        </Select>
      </Form.Item>

      <Form.Item name="phone" label="电话" rules={[{required: true}]}>
      <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item name="mail" label="邮箱" rules={[{type: "email"}, {required: true}]}>
        <Input />
      </Form.Item>

    </Form>
  );
};

export default SubmitForm;