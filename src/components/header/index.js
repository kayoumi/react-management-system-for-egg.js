import React from 'react';
import { Row, Col } from 'antd';
import HeaderLogo from '../headerLogo';
import HeaderDropdown from '../headerDropdown';
import './index.less';

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
			<HeaderDropdown></HeaderDropdown>
		</Col>
  </Row>
);

export default Header;