import { Button, Descriptions, PageHeader } from "antd";
import React, { FC } from "react";
import "../../styles/styles.css";

const PageHead: FC = () => {
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => window.history.back()}
      title="人员录入系统"
      subTitle="一个基于React+Koa的学生管理系统，可实现人员的增删查改功能"
      extra={[
        <Button key="1" type="primary">
          <a href="https://git.kscampus.io:10443/hust-2022-web-tasks/donglingjing/src/master/final">
						前往仓库，查看源码
					</a>
        </Button>
      ]}
    >
      <Descriptions size="default" column={3}>
        <Descriptions.Item label="开发者">HUST / CS / 董玲晶</Descriptions.Item>
        <Descriptions.Item label="特别鸣谢">金山WEB前端开发全体授课老师</Descriptions.Item>
				<Descriptions.Item label="生产时间">2022年11月 / 大三上学期</Descriptions.Item>
      </Descriptions>
    </PageHeader>
  );
};

export default PageHead;
