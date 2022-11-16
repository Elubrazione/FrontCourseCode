import { Timeline } from "antd";
import React, { FC } from "react";
import "../../styles/styles.css";

const TimeLine: FC = () => (
    <Timeline mode="left" className="timeline">
    <Timeline.Item label="2022-11-11">创建项目</Timeline.Item>
    <Timeline.Item>写前端</Timeline.Item>
    <Timeline.Item label="2022-11-14">完成所有UI，无实际功能</Timeline.Item>
    <Timeline.Item label="2022-11-14">初步完成服务端代码</Timeline.Item>
    <Timeline.Item color="red">与redux作斗争且调试后端</Timeline.Item>
    <Timeline.Item label="2015-11-16 04:00">放弃redux，推倒重写；编写所有功能代码</Timeline.Item>
    <Timeline.Item label="2015-11-16 09:00" color="green">完成项目</Timeline.Item>
    <Timeline.Item label="2015-11-16 11:30">完成README文档</Timeline.Item>
    <Timeline.Item color="green">修缮“关于”页面</Timeline.Item>
  </Timeline>
);

export default TimeLine;