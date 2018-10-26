import React from 'react';
import { Card } from 'antd';
import './index.less';
import headUrl from '../../assets/head_default.jpg';

const { Meta } = Card;

const SidebarUser = () => (
    <Card
        className="mt-3"
        cover={<img alt="example" src={ headUrl } />}
    >
        <Meta
            title="用户名"
            description="个性签名个性签名个性签名个性签名个性签名"
        />
        <p className="mt-2">地点: 广州</p>
    </Card>
);

export default SidebarUser;
