import "./NotFound.css";
import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const linkToHome = () => {
    navigate("/system");
  };
  return (
    <Result
      className="notfound"
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={linkToHome}>Back Home</Button>}
    />
  );
};

export default NotFound;