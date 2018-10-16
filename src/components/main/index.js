import React from 'react';
import { Row, Col } from 'antd';
import SidebarUser from '../sidebarUser';
import MainTab from '../mainTab';
import './index.less';

const Main = () => (
  <Row>
    <Col
      span={4}
      offset={3}
    >
      <SidebarUser></SidebarUser>
    </Col>
    <Col
      span={14}
      offset={1}
    >
      <MainTab></MainTab>
    </Col>
  </Row>
);

export default Main;


