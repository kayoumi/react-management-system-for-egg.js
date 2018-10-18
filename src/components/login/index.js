import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import API from '../../utils/API';
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
      const history = this.props.history;
      console.log(data);
      // history.push({ pathname: '/' });
      API.login(data).then((res) => {
        console.log(res);
        if(res.data.code == 0) {
          this.props.login();
          console.log(this.props);
          if(values.remember) {
            localStorage.setItem('mobile', values.mobile);
            console.log(res.data.nickname);
            res.data.nickname && localStorage.setItem('nickname', res.data.nickname);
            res.data.token && localStorage.setItem('token', res.data.token);
            res.data.adminToken && localStorage.setItem('adminToken', res.data.adminToken);
            res.data.superAdminToken && localStorage.setItem('superAdminToken', res.data.superAdminToken);
          }
          history.push({ pathname: '/' });
        } else {
          info('登录失败！');
        }
      }).catch((err) => {
        info('登录失败！');
      });
    });
  }

  render() {
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

export default connect(
  null,
  { login }
)(Login);

