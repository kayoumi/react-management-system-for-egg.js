import React from 'react';
import { Link } from 'react-router-dom';
import { Popover, Avatar, Badge } from 'antd';
import headUrl from '../../assets/head_default.jpg';

const userMessageCount = 1;

const clickLogout = (logout) => () => {
  logout();
  localStorage.setItem('mobile', '');
  localStorage.setItem('token', '');
};

const detailsMenu = (logout) => (
  <ul className="header-dropdown-pop">
    <li className="hdd-menu-item style-none hover-underline cursor-pointer f4"><Link to="/tab/write">写文章</Link></li>
    <li className="hdd-menu-item style-none hover-underline cursor-pointer f4">修改密码</li>
    <li className="hdd-menu-item style-none hover-underline cursor-pointer f4" onClick={ clickLogout(logout) }><Link to="/login">退出登录</Link></li>
  </ul>
);

const HeaderDropdown = ({ logout }) => (
  <Popover
    className="header-dropdown d-flex float-right cursor-pointer"
    placement="bottomRight"
    content={ detailsMenu(logout) }
    trigger="click">
    <Badge count={ userMessageCount }>
      <Avatar shape="square" src={ headUrl }/>
    </Badge>
  </Popover>
);

export default HeaderDropdown;
