import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import HeaderLogo from '../headerLogo';
import HeaderDropdown from '../headerDropdown';
import HeaderLogin from '../headerLogin';
import './index.less';

const Header = ({ isLogin }) => (
  <Row className="d-flex flex-items-center">
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
			{/* <HeaderDropdown></HeaderDropdown> */}
			{/* <HeaderLogin></HeaderLogin> */}
		</Col>
  </Row>
);

const mapStateToProps = state => ({
    isLogin: state.status
})

export default connect(
    mapStateToProps,
    null
)(Header);
