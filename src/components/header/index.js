import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Popover, Avatar, Badge, Button } from 'antd';
import { logout } from '../../actions';
import { info } from '../../config';
import logoUrl from '../../assets/logo.svg';
import headUrl from '../../assets/head_default.jpg';
import './index.less';

// HeaderLogo ======================================
const clickInfo = () => {
  info('回到首页！');
};

const HeaderLogo = () => (
  <Link to="/" className="header-logo d-flex flex-items-center" title="logo" onClick={ clickInfo }>
    <img src={ logoUrl } className="logo-img" alt="logo"></img>
    <span className="logo-text">CandyBullet</span>
  </Link>
);

// HeaderDropdown ======================================
const userMessageCount = 1;

const clickLogout = (logout) => () => {
  logout();
  localStorage.setItem('mobile', '');
  localStorage.setItem('token', '');
};

const detailsMenu = (logout) => (
  <ul>
    <li className="hdd-menu-item style-none hover-underline cursor-pointer f4">写文章</li>
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

// HeaderLogin ======================================
const HeaderLogin = () => (
  <div className="header-login d-flex flex-justify-center">
      <Button type="primary"><Link to="/login">登录</Link></Button>
      <Button className="ml-3" type="primary"><Link to="/signUp">注册</Link></Button>
  </div>
);

// Header ======================================
const Header = ({ isLogin }) => (
  <Row className="header d-flex flex-items-center">
		<Col
			span={4}
		>
			<HeaderLogo></HeaderLogo>
		</Col>

		<Col
			span={3}
			offset={16}
		>
			{ isLogin ? <HeaderDropdown></HeaderDropdown> : <HeaderLogin></HeaderLogin> }
		</Col>
  </Row>
);

const mapStateToProps = state => ({
    isLogin: state.status.isLogin
})

export default connect(
    mapStateToProps,
    null
)(Header);
