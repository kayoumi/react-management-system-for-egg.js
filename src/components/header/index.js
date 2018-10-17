import React from 'react';
import { Row, Col } from 'antd';
import HeaderLogo from '../headerLogo';
import HeaderDropdown from '../headerDropdown';
import HeaderLogin from '../headerLogin';
import './index.less';

const isLogin = () => {
	return true;
}

const Header = () => (
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
			{ isLogin() ? <HeaderDropdown></HeaderDropdown> : <HeaderLogin></HeaderLogin> }
			{/* <HeaderDropdown></HeaderDropdown> */}
			{/* <HeaderLogin></HeaderLogin> */}
		</Col>
  </Row>
);

export default Header;