import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.css";
import "./Login.css";

const Login = () => {
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