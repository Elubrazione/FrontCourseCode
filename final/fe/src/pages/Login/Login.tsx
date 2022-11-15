import React from "react";
import axios from "axios";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.css";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    axios.post("/api/user/login", {
      username: values.username,
      password: values.password,
      remember: values.remember
    })
    .then(res => {
      console.log("/api/user/login success: ", res.data);
      const { code, message } = res.data;
      if (code === 0) {
        console.log("navvv");
        navigate("/system");
      } else {
        // todo: 提示信息
        console.log(message);
      }
    })
    .catch(err => console.log("error: ", err));
  };

  return (
    <div className="login-root">
      <div className="login-head">登录</div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "请输入账号！" }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入密码！" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="checkbox">记住我</Checkbox>
          </Form.Item>
          <Button type="primary" htmlType="submit" className="button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;