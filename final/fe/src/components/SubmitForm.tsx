import { Form, Input, Select, Button } from "antd";
import axios from "axios";
import React, { FC } from "react";
import { useAppSelector } from "../apis/redux/store";
import { selectStudents } from "../apis/redux/stuSlice";
import "./styles.css";
const { Option } = Select;

interface IProps {
  initialValue: any;
  handleOK: Function;
  handleCancel: Function
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

const SubmitForm: FC<IProps> = ({initialValue, handleOK, handleCancel}) => {
  const stuInfos = useAppSelector(selectStudents);
  console.log(stuInfos);

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

  const onFinish = (values: any) => {
    console.log(values);
    axios.post("/api/stu/create", {
      id: stuInfos.length+1,
      name: values.name,
      major: values.major,
      year: values.year,
      gender: values.gender,
      phone: values.phone,
      mail: values.mail
    })
    .then(res => {
      console.log("/api/stu/create success: ", res.data);
    })
    .catch(err => console.log(err));
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

      <Form.Item>
        <div className="modal-button">
          <Button className="button-cancel" onClick={() => handleCancel()}>
            取消
          </Button>
          <Button type="primary" htmlType="submit" className="button-commit">
            提交
          </Button>
        </div>
      </Form.Item>

    </Form>
  );
};

export default SubmitForm;