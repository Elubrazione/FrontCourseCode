import React, { FC } from "react";
import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./index.css";

const DataSelect: FC = () => {
    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);
    return (
        <div className="selector-container">
            <Button type="primary" icon={<PlusOutlined />}>添加</Button>
            <Search
                placeholder="姓名"
                allowClear
                enterButton="搜索"
                size="middle"
                onSearch={onSearch}
            />
            <Button>重置</Button>
        </div>
    );
};

export default DataSelect;