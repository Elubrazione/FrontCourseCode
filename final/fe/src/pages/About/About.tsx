import { Card, Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import "../../styles/styles.css";
import HeadBar from "../../components/HeadBar";
import SideBar from "../../components/SideBar";
import TimeLine from "../../components/About/TimeLine";
import PageHead from "../../components/About/PageHeader";

const About = () => {
  return (
    <>
      <HeadBar />
      <Layout>
        <SideBar keki={"2"}/>
        <Content>
          <div className="about-container">
            <PageHead />
            <div className="about-body">
              <TimeLine />
              <div className="about-text">
                <Card title="关于本次项目以及课程的一些感想" style={{ width: 520 }}>
                  <p>
                    1. 本次项目最遗憾的是最后还是没有使用redux做全局状态管理，不知道什么原因
                    useAppSelector() 一直都获取不到store里面的数据。最后因为项目截止时间在即
                    所以放弃了使用redux，希望下次做前端项目的时候可以使用上。
                  </p>
                  <p>
                    2. 虽然没有用redux做，但是最后完成的时候也成就感满满。没有想到自己真的可以
                    做出来一些表面看起来能用的东西。
                  </p>
                  <p>
                    3. 通过这个课真的学到了很多，和一起上课的同学说金山真的有在想好好教会我们怎么做前端。
                    写这段话的时候回顾了一下这段学习的过程，从JS都写不清楚，CSS用不清楚，
                    完全不会Raect的情况下，也完成了每一次的作业，最后自己做了一个全栈项目。
                  </p>
                  <p>
                    4. 我记得有一天武老师给我发消息说郑老师说我代码写得还不错，看到消息很感动甚至有点破防，
                    因为真的很久没有受到来自外界的夸奖了。同时我也对互联网公司有了一些改观，原来上班的大家也还是温柔善良的人，
                    氛围也不像网上所说的那样压抑，每天充斥着的都是996、加班、赶项目。总之，感谢这个课程，也感谢当初报了这个课的自己。
                  </p>
                </Card>
              </div>
              <div className="card">
                <Card title="已实现设计" style={{ width: 320 }}>
                  <p>1. 增加了关于页面，即当前页面</p>
                  <p>2. 在学生展示的表格中增加了按年级排序的功能</p>
                  <p>3. 实现导航栏的折叠</p>
                </Card>
                <Card title="未实现设计" style={{ width: 320 }}>
                  <p>1. 注册功能，注册时要通过密钥校验人员，确保是内部人员</p>
                  <p>2. 扩展搜索功能；增加表格筛选功能</p>
                  <p>3. 增加上传头像功能，以及自动生成头像的按钮</p>
                </Card>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default About;
