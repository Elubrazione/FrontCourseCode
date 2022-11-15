import { Button, Modal } from "antd";
import React from "react";

const countDown = () => {
  let secondsToGo = 5;

  const modal = Modal.success({
    title: "",
    content: `This modal will be destroyed after ${secondsToGo} second.`,
  });

  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
};

export default countDown;