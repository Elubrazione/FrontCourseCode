import React, { FC } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const Login: FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-root">
      <div className="login-head">登录</div>
      <Form
      // name="basic"
      // labelCol={{ span: 2 }}
      // wrapperCol={{ span: 4 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input className="acount"/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Checkbox className="checkbox">记住我</Checkbox>
          <Button type="primary" htmlType="submit" className="button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;