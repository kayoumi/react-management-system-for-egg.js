import React, { Component } from 'react';
import { connect } from 'react-redux';
import { verifyLogin } from '../../actions';
import helper from '../../utils/helper';
import { Row, Col, Spin } from 'antd';
import SidebarUser from '../sidebar-user';
import MainTab from '../main-tab';
import { info } from '../../config';
import './index.less';

const Main = ({ isLogin, loginErr, verifyLogin, history, location }) => {

  const renderLoading = () => (
    <Row>
      <Col
        className="d-flex flex-justify-center"
      >
        <Spin className="mt-4"></Spin>
      </Col>
    </Row>
  );

  console.log('location开始了：', location);

  const getTab = () => location.pathname.replace('/tab/', '');

  const setPathname = (tabNum) => {
    let tab;
    switch(tabNum) {
      case '1':
        tab = 'overview';
        break;
      case '2':
        tab = 'write';
        break;
      case '3':
        tab = 'personal';
        break;
      case '4':
        tab = 'all';
        break;
      case '5':
        tab = 'operation';
        break;
      default:
        tab = 'overview';
    }
    const pathname = `/tab/${ tab }`;
    history.push({ pathname });
  }

  const renderMain = () => (
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
        <MainTab tab={ getTab() } setPathname = { setPathname }></MainTab>
      </Col>
    </Row>
  );

  if(!isLogin) {
    if(loginErr) {
      history.replace({ pathname: '/login' });
    } else {
      if(!helper.verifyStorage()) {
        info('请重新登录！');
        history.replace({ pathname: '/login' });
      } else {
        verifyLogin();
      }
    }
  }

  console.log('isLogin开始了：', isLogin);

  return (
    <div>
      { isLogin ? renderMain() : renderLoading() }
    </div>
  )
}

const mapStateToProps = state => ({
  isLogin: state.login.isLogin,
  loginErr: state.login.loginErr
});

export default connect(
  mapStateToProps,
  { verifyLogin }
)(Main);

