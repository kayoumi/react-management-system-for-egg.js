import React, { Component } from 'react';
import { connect } from 'react-redux';
import { verifyLogin } from '../../actions';
import helper from '../../utils/helper';
import { Row, Col, Spin } from 'antd';
import SidebarUser from '../SidebarUser';
import MainTab from '../MainTab';
import API from '../../utils/API';
import { info } from '../../config';
import './index.less';

class Main extends Component {
  state = {
    loading: true,
    isLogin: false,
  }

  componentDidUpdate(prevProps) {
    if(this.props.loginText !== prevProps.loginText) {
      info(this.props.loginText);
    }
    if(this.props.isLogin !== prevProps.isLogin) {
      if(this.props.isLogin) {
        this.setState({
          loading: false,
          isLogin: true,
        });
      } else {
        this.props.history.push({ pathname: '/login' });
      }
    }
  }

  componentDidMount() {
    console.log('location', this.props.location);
    if(this.props.isLogin) {
      this.setState({
        loading: false,
        isLogin: true,
      });
    } else {
      if(!helper.verifyStorage()) {
        info('请重新登录！');
        this.props.history.replace({ pathname: '/login' });
      } else {
        this.props.verifyLogin();
        // API.verifyLogin().then((res) => {
        //   console.log('verify', res);
        //   if(res.data.code == 0) {
        //     info('登录成功！');
        //     this.props.login();
        //     this.setState({
        //       loading: false,
        //       isLogin: true,
        //     });
        //   } else {
        //     info('请重新登录！');
        //     this.props.history.replace({ pathname: '/login' });
        //   }
        // }).catch((err) => {
        //   info('请登录！');
        //   this.props.history.replace({ pathname: '/login' });
        // });
      }
    }
  }

  renderLoading() {
    return (
      <Row>
        <Col
          className="d-flex flex-justify-center"
        >
          <Spin className="mt-4"></Spin>
        </Col>
      </Row>
    );
  }

  getTab() {
    return this.props.location.pathname.replace('/tab/', '');
  }

  setPathname = (tabNum) => {
    let tab;
    console.log(tabNum);
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
    this.props.history.push({ pathname });
  }

  renderMain() {
    return (
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
          <MainTab tab={ this.getTab() } setPathname = { this.setPathname }></MainTab>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <div>
        { this.state.loading ? this.renderLoading() : this.renderMain() }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLogin: state.login.isLogin,
  loginText: state.login.text
});

export default connect(
  mapStateToProps,
  { verifyLogin }
)(Main);



