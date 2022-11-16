import { Form, Select } from "antd";
import React from "react";
const { Option } = Select;

export const prefixSelector = (
	<Form.Item name="prefix" noStyle>
		<Select style={{ width: 70 }} disabled={true} defaultValue="86">
			<Option value="86">+86</Option>
		</Select>
	</Form.Item>
);

export const suffixSelector = (
	<Form.Item name="suffix" noStyle>
		<Select style={{ width: 70 }} disabled={true} defaultValue="college">
			<Option value="college">学院</Option>
		</Select>
	</Form.Item>
);