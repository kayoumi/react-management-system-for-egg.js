import React from 'react';
import { Card, Tag } from 'antd';
import './index.less';

const { Meta } = Card;

const oneCard = (title, description, tag) => (
    <Card
        hoverable
        className="width-350 rounded-2 mb-3"
    >
        <Meta
        title={ title }
        />
        <p className="mt-2 text-ellipsis-1">{ description }</p>
        <Tag color="magenta">{ tag }</Tag>
    </Card>
);

const MainTabOverview = () => (
    <div>
        <h2>个人最新文章</h2>
        <div className="mt-1 d-flex flex-wrap flex-justify-between">
            { oneCard('标题1', '描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1', '标签1') }
            { oneCard('标题2', '描述2', '标签2') }
            { oneCard('标题3', '描述3', '标签3') }
            { oneCard('标题4', '描述4', '标签4') }
            { oneCard('标题5', '描述5', '标签5') }
            { oneCard('标题6', '描述6', '标签6') }
            </div>
    </div>
);

export default MainTabOverview;
