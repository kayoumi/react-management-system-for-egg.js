import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Spin } from 'antd';
import SidebarUser from '../sidebarUser';
import MainTab from '../mainTab';
import { info } from '../../config';
import './index.less';

class Main extends Component {
  state = {
    loading: true,
    isLogin: false,
  }

  componentDidMount() {
    // setTimeout(() => {
    //   info('请重新登录！');
    //   this.props.history.replace({ pathname: '/login' });
    // }, 1000);

    setTimeout(() => {
      info('登录成功！');
      this.setState({
        loading: false,
        isLogin: true,
      });
    }, 1000);
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


// const Main = () => (
//   <Row>
//     <Col
//       span={4}
//       offset={3}
//     >
//       <SidebarUser></SidebarUser>
//     </Col>
//     <Col
//       span={14}
//       offset={1}
//     >
//       <MainTab></MainTab>
//     </Col>
//   </Row>
// );

export default Main;


