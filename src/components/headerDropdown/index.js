import React from 'react';
import { Popover } from 'antd';
import './index.less';
import headUrl from '../../assets/head_default.jpg';

const detailsMenu = (
    <ul>
        <li>写文章</li>
        <li>退出登录</li>
    </ul>
);

const HeaderDropdown = () => (
    <Popover className="d-flex float-right" content={ detailsMenu } title="详细菜单">
        <img className="header-dp-head float-left" src={ headUrl } alt="user"></img>
        <span className="dropdown-caret"></span>
    </Popover>
);

export default HeaderDropdown;