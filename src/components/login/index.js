import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginWithPSW } from '../../actions';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import API from '../../utils/api';
import { info } from '../../config';
import './index.less';

const FormItem = Form.Item;

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      const data = {
        mobile: values.mobile,
        password: values.password,
      };
      console.log(data);
      this.props.loginWithPSW(data);
    });
  }

  componentDidUpdate(prevProps) {
    if(this.props.isLogin !== prevProps.isLogin && this.props.isLogin) {
      this.props.history.push({ pathname: '/' });
    }
  }

  render() {
    console.log(this.props.location);
    const { getFieldDecorator } = this.props.form;
    return (
    <Row>
      <Col
        className="d-flex flex-justify-center"
      >
        <Form onSubmit={this.handleSubmit} className="max-width-300 mt-80">
          <FormItem>
            {getFieldDecorator('mobile', {
              rules: [{ required: true, message: '请输入您的手机号!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入您的密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住我</Checkbox>
            )}
            <Button type="primary" htmlType="submit" className="width-full">
              登录
            </Button>
            Or <Link to="/signUp">注册!</Link>
          </FormItem>
        </Form>
      </Col>
    </Row>
    );
  }
}

const Login = Form.create()(LoginForm);

const mapStateToProps = state => ({
  isLogin: state.login.isLogin
});

export default connect(
  mapStateToProps,
  { loginWithPSW }
)(Login);

