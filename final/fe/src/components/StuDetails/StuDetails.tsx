import React, { FC } from "react";
import { Image } from "antd";
import "./StuDetails.css";

interface IProps {
	stuInfo: any;
};

const StuDetails: FC<IProps> = ({stuInfo}) => {
	let img: boolean = false;
	if (stuInfo[0] === "头像：") {
		img = true;
		console.log("true");
	}
  return (
		<div className="detail-list">
			<span>{stuInfo[0]}</span>
			{img? <Image src={stuInfo[1]} width={150} height={150}/>: <span>{stuInfo[1]}</span>}
		</div>
	);
};

export default StuDetails;
