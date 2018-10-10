import React from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const renderHeader = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    </Header>
  );
};

const renderContent = () => {
  return (
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
    </Content>
  );
};

const renderFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Yang Zhou ©2018
    </Footer>
  );
};


const Layouts =  ({ match }) => (
  <Layout>
    { renderHeader() }
    { renderContent() }
    { renderFooter() }
  </Layout>
);

export default Layouts;
