import React from 'react';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import HeaderLogo from '../headerLogo';
import HeaderDropdown from '../headerDropdown';
import SidebarUser from '../sidebarUser';
import MainTab from '../mainTab';
import './index.less';


const { Header, Content, Footer } = Layout;

const renderHeader = () => {
  return (
    <Header>
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
    </Header>
  );
};

const renderContent = () => {
  return (
    <Content>
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
          className="min-height-1080"
        >
          <MainTab></MainTab>
        </Col>
      </Row>
    </Content>
  );
};

const renderLogin = () => {
  return (
    <Content>
      <Row>
        <Col
          span={4}
          offset={3}
        >
          <Login></Login>
        </Col>
      </Row>
    </Content>
  );
};

const renderSignUp = () => {
  return (
    <Content>
      <Row>
        <Col
          span={4}
          offset={3}
        >
          <SignUp></SignUp>
        </Col>
      </Row>
    </Content>
  );
};

const renderFooter = () => {
  return (
    <Footer>
      Yang Zhou ©2018
    </Footer>
  );
};


const Layouts =  (isLogin) => (
  <Layout>
    { renderHeader() }
    {/* { isLogin ? renderContent() : renderLogin() } */}
    { renderLogin() }
    { renderFooter() }
  </Layout>
);

export default Layouts;
