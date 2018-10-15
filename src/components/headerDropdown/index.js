import React from 'react';
import { Popover, Avatar, Badge } from 'antd';
import './index.less';
import headUrl from '../../assets/head_default.jpg';

const userMessageCount = 1;

const detailsMenu = (
    <ul>
        <li className="hdd-menu-item style-none hover-underline cursor-pointer f4">写文章</li>
        <li className="hdd-menu-item style-none hover-underline cursor-pointer f4">修改密码</li>
        <li className="hdd-menu-item style-none hover-underline cursor-pointer f4">退出登录</li>
    </ul>
);

const HeaderDropdown = () => (
    <Popover className="d-flex float-right cursor-pointer" placement="bottomRight" content={detailsMenu} trigger="click">
        <Badge count={ userMessageCount }>
            <Avatar shape="square" src={ headUrl }/>
        </Badge>
    </Popover>
);

export default HeaderDropdown;
