import React from 'react';
import { Layout, Row, Col } from 'antd';
import MyHeader from '../header';
import Routes from '../routes';
import './index.less';

const { Header, Content, Footer } = Layout;

const Layouts =  () => (
  <Layout>
    <Header>
      <MyHeader></MyHeader>
    </Header>
    <Content>
      <Routes></Routes>
    </Content>
    <Footer>
      Yang Zhou ©2018
    </Footer>
  </Layout>
);

export default Layouts;
