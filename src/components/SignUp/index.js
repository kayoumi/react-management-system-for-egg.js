import React from 'react';
import { Row, Col, Form, Input, Tooltip, Icon, Select, Button } from 'antd';
import API from '../../utils/API';
import { info } from '../../config';
import './index.less';

const FormItem = Form.Item;
const Option = Select.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      console.log(values);
      const data = {
        mobile: values.mobile,
        password: values.password,
        nickname: values.nickname,
        code: values.code
      };
      const history = this.props.history;
      console.log(data);
      // history.push({ pathname: '/login' });
      API.signUp(data).then((res) => {
        console.log(res);
        if(res.data.code == 0) {
          info('注册成功，请登录！');
          history.push({ pathname: '/login' });
        } else {
          info('注册失败！');
        }
      }).catch((err) => {
        info('注册失败！');
      });
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不同，请重新输入!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
    <Row>
      <Col
        className="d-flex flex-justify-center"
      >
        <Form onSubmit={this.handleSubmit} className="mt-80 ml-n100 width-350">
          <FormItem
            {...formItemLayout}
            label="手机号"
          >
            {getFieldDecorator('mobile', {
              rules: [{ required: true, message: '请输入您的手机号!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="密码"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: '请输入密码!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="确认密码"
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: '请再次输入密码!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                昵称&nbsp;
                <Tooltip title="你想让别人怎么称呼你?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: '请输入昵称!', whitespace: true }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="邀请码"
          >
            {getFieldDecorator('code', {
              rules: [{ required: false, message: '请输入邀请码!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="width-full">注册</Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
    );
  }
}

const SignUp = Form.create()(RegistrationForm);

export default SignUp;
