import React, { Component } from 'react';
import { Input, Button, Form, Row, Col, Icon } from 'antd';
import API from '../../utils/API';
import { info } from '../../config';
import './index.less';

const { TextArea } = Input;
const FormItem = Form.Item;

class WriteForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			console.log('Received values of form: ', values);
			API.postArticle(values).then((res) => {
				if(res.data.code == 0) {
					info('提交成功！');
					this.handleReset();
				} else {
					info('提交失败！');
				}
			}).catch((err) => {
				info('提交失败，' + err);
			});
		});
	}
    
	handleReset = () => {
		this.props.form.resetFields();
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form
				onSubmit={this.handleSubmit}
			>
				<Row>
					<Col span={5}>
					<h2>写文章</h2>
					</Col>
					<Col className="text-right" offset={14} span={5}>
						<Button type="primary" htmlType="submit">提交</Button>
					</Col>
				</Row>
				<FormItem>
					{getFieldDecorator('title', {
						rules: [{ required: true, message: '请输入文章标题!' }],
					})(
						<Input addonBefore="标题" placeholder="文章标题"/>
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('tag', {
						rules: [{ required: true, message: '请输入文章标签!' }],
					})(
						<Input addonBefore="标签" placeholder="文章标签"/>
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('summary', {
						rules: [{ required: true, message: '请输入文章摘要!' }],
					})(
						<TextArea placeholder="文章摘要" autosize={{ minRows: 3, maxRows: 5 }} />
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('content', {
						rules: [{ required: true, message: '请输入文章内容!' }],
					})(
						<TextArea placeholder="文章内容" autosize={{ minRows: 10, maxRows: 20 }} />
					)}
				</FormItem>
			</Form>
		);
	}
}

const MainTabWrite = Form.create()(WriteForm);

export default MainTabWrite;
