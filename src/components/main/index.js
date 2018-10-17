import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { withRouter } from 'react-router-dom';
import { Row, Col, Spin } from 'antd';
import SidebarUser from '../sidebarUser';
import MainTab from '../mainTab';
import API from '../../utils/API';
import { info } from '../../config';
import './index.less';

class Main extends Component {
  state = {
    loading: true,
    isLogin: false,
  }

  componentDidMount() {
    if(this.props.isLogin) {
      info('登录成功！');
      this.props.login();
      this.setState({
        loading: false,
        isLogin: true,
      });
    } else {
      API.verifyLogin().then((res) => {
        console.log('verify', res);
        if(res.data.code == 0) {
          info('登录成功！');
          this.props.login();
          this.setState({
            loading: false,
            isLogin: true,
          });
        } else {
          info('请重新登录！');
          this.props.history.replace({ pathname: '/login' });
        }
      }).catch((err) => {
        info('请登录！');
        this.props.history.replace({ pathname: '/login' });
      });
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
          <MainTab></MainTab>
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
  isLogin: state.status
})

export default connect(
    mapStateToProps,
    { login }
)(Main);



