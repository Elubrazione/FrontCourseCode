import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import HeadBar from "../../components/HeadBar";
import { Breadcrumb, Layout } from "antd";
import { useNavigate } from "react-router";
import { Content } from "antd/lib/layout/layout";
import StuDetails from "../../components/StuDetails";
import "./StuSingle.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import formDataType from "../../apis/dataTypes";


const StuSingle = () => {
	const { key } = useParams();
	const navigate = useNavigate();
	const linkToHome = () => {navigate("/system");};
	const [stuInfos, setStuInfos] = useState<formDataType[]>([]);

	useEffect(() => {
		axios.get("/api/stu/list")
		.then(res => {
			console.log(res.data.list);
			setStuInfos(res.data.list);
		})
		.catch(err => console.log(err));
	}, []);

	const formateData = () => {
		const labelList = ["头像：", "姓名：", "专业：", "年级：", "性别：", "电话：", "邮箱："];
		const data = stuInfos.find(ele => ele?.key === key);
		console.log("find data: ", data);
		const dataList = [data?.avatar, data?.name, data?.major, data?.year, data?.gender, data?.phone, data?.mail];
		const formatData: any = [];
		for(let i=0; i<labelList.length; i++) {
			const temp = [labelList[i], dataList[i]];
			formatData.push(temp);
		};
		console.log("formatedata:	", formatData);
		return formatData;
	};
	const data = formateData();

	return (
		<>
			<HeadBar />
				<Layout>
					<SideBar keki={"1"}/>
					<Layout className="info-main">
						<Breadcrumb style={{ margin: "1em 1.5em" }}>
							<Breadcrumb.Item onClick={linkToHome} href="">人员管理</Breadcrumb.Item>
							<Breadcrumb.Item>查看详情</Breadcrumb.Item>
						</Breadcrumb>
						<Content className="stu-detail">
							<div>
								{
									data===undefined? <></>:
									data.map((item: Array<(React.Key | null | undefined)>) =>
										<StuDetails key={item[0]} stuInfo={item}/>)
								}
							</div>
						</Content>
					</Layout>
				</Layout>
		</>
	);
};

export default StuSingle;