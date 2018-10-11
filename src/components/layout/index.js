import React from 'react';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import HeaderLogo from '../headerLogo';
import HeaderDropdown from '../headerDropdown';
import './index.less';


const { Header, Content, Footer } = Layout;

const renderHeader = () => {
  return (
    <Header>
      <Row>
        <Col 
          span={4}
          className="header-logo"
        >
          <HeaderLogo></HeaderLogo>
        </Col>  
        
        <Col 
          span={3} 
          offset={16}
          className="header-dropDown"
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
          span={5} 
          offset={3}
          className="sidebar"
        >
          侧栏
        </Col>
        <Col 
          span={13} 
          offset={1}
          className="main"
        >
          内容
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


const Layouts =  () => (
  <Layout>
    { renderHeader() }
    { renderContent() }
    { renderFooter() }
  </Layout>
);

export default Layouts;
