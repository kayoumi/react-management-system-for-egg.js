import React from 'react';
import { Input, Button } from 'antd';
import './index.less';

const { TextArea } = Input;

const MainTabWrite = () => (
    <div>
        <div className="d-flex flex-nowrap flex-justify-between">
            <h2>写文章</h2>
            <Button type="primary">提交</Button>
        </div>
        <div className="mt-1">
            <Input addonBefore="标题" placeholder="文章标题"/>
        </div>
        <div className="mt-3">
            <Input addonBefore="标签" placeholder="文章标签"/>
        </div>
        <div className="mt-3">
            <TextArea placeholder="文章摘要" autosize={{ minRows: 3, maxRows: 5 }} />
        </div>
        <div className="mt-3">
            <TextArea placeholder="文章内容" autosize={{ minRows: 10, maxRows: 20 }} />
        </div>
    </div>
);

export default MainTabWrite;
