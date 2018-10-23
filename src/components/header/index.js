import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { logout } from '../../actions';
import HeaderLogo from './HeaderLogo';
import HeaderDropdown from './HeaderDropdown';
import HeaderLogin from './HeaderLogin';
import './index.less';

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
			{ isLogin ? <HeaderDropdown logout={ logout }></HeaderDropdown> : <HeaderLogin></HeaderLogin> }
		</Col>
  </Row>
);

const mapStateToProps = state => ({
    isLogin: state.login.isLogin
})

export default connect(
    mapStateToProps,
    { logout }
)(Header);
