import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import HeadBar from "../../components/HeadBar/HeadBar";
import { Breadcrumb, Layout } from "antd";
import { useNavigate } from "react-router";
import { Content } from "antd/lib/layout/layout";
import StuDetails from "../../components/StuDetails/StuDetails";
import "./StuSingle.css";
import { faker } from "@faker-js/faker";

const StuSingle = () => {
	const navigate = useNavigate();
	const linkToHome = () => {navigate("/system");};

	return (
		<>
			<HeadBar />
				<Layout>
					<SideBar />
					<Layout className="info-main">
						<Breadcrumb style={{ margin: "1em 1.5em" }}>
							<Breadcrumb.Item onClick={linkToHome} href="">人员管理</Breadcrumb.Item>
							<Breadcrumb.Item>查看详情</Breadcrumb.Item>
						</Breadcrumb>
						<Content className="stu-detail">
							<div>
								{data.map(item => <StuDetails key={item[0]} stuInfo={item}/>)}
							</div>
						</Content>
					</Layout>
				</Layout>
		</>
	);
};

const data = [
	["头像：", faker.image.abstract()],
	["姓名：", "John Brown"],
	["专业：", "CS"],
	["年级：", "2022级"],
	["性别：", "女"],
	["电话：", "11111"],
	["邮箱：", "google"],
];

export default StuSingle;