import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, Form, Row, Col, Icon } from 'antd';
import API from '../../utils/api';
import { info } from '../../config';
import { postArticle } from '../../actions';
import './index.less';

const { TextArea } = Input;
const FormItem = Form.Item;
let canResetForm = false;

const WriteForm = ({ isPosted, postArticle, form }) => {
    console.log(form);

    const { getFieldDecorator } = form;

    const handleReset = () => {
        form.resetFields();
    }

    if(canResetForm) {
        if(isPosted) {
            canResetForm = false;
            console.log('哈哈，重置表单！！！');
            // form.resetFields();
            handleReset();
        }
    }


    const handleSubmit = (e) => {
        console.log('开始输出e：：：：：：：：', e);
        e.preventDefault();
        form.validateFields((err, values) => {
            if(!err) {
                console.log('Received values of form: ', values);
                postArticle(values);
                canResetForm = true;
            }
            // API.postArticle(values).then((res) => {
            //     if(res.data.code == 0) {
            //         info('提交成功！');
            //         this.handleReset();
            //         this.props.articleRefresh();
            //     } else {
            //         info('提交失败！');
            //     }
            // }).catch((err) => {
            //     info('提交失败，' + err);
            // });
        });
    };

    const test = () => {
        console.log('哈哈哈哈哈！！！！！');
    }

    return (
        <Form
            onSubmit={ handleSubmit }
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

const TabWrite = Form.create()(WriteForm);

const mapStateToProps = state => ({
  isPosted: state.article.isPosted
});

export default connect(
    mapStateToProps,
    { postArticle }
)(TabWrite);


// class WriteForm extends Component {
//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.props.form.validateFields((err, values) => {
//             console.log('Received values of form: ', values);
//             API.postArticle(values).then((res) => {
//                 if(res.data.code == 0) {
//                     info('提交成功！');
//                     this.handleReset();
//                     this.props.articleRefresh();
//                 } else {
//                     info('提交失败！');
//                 }
//             }).catch((err) => {
//                 info('提交失败，' + err);
//             });
//         });
//     }

//     handleReset() {
//         this.props.form.resetFields();
//     }
//     render() {
//         console.log('query', this.props);
//         const { getFieldDecorator } = this.props.form;
//         return (
//             <Form
//                 onSubmit={this.handleSubmit}
//             >
//                 <Row>
//                     <Col span={5}>
//                     <h2>写文章</h2>
//                     </Col>
//                     <Col className="text-right" offset={14} span={5}>
//                         <Button type="primary" htmlType="submit">提交</Button>
//                     </Col>
//                 </Row>
//                 <FormItem>
//                     {getFieldDecorator('title', {
//                         rules: [{ required: true, message: '请输入文章标题!' }],
//                     })(
//                         <Input addonBefore="标题" placeholder="文章标题"/>
//                     )}
//                 </FormItem>
//                 <FormItem>
//                     {getFieldDecorator('tag', {
//                         rules: [{ required: true, message: '请输入文章标签!' }],
//                     })(
//                         <Input addonBefore="标签" placeholder="文章标签"/>
//                     )}
//                 </FormItem>
//                 <FormItem>
//                     {getFieldDecorator('summary', {
//                         rules: [{ required: true, message: '请输入文章摘要!' }],
//                     })(
//                         <TextArea placeholder="文章摘要" autosize={{ minRows: 3, maxRows: 5 }} />
//                     )}
//                 </FormItem>
//                 <FormItem>
//                     {getFieldDecorator('content', {
//                         rules: [{ required: true, message: '请输入文章内容!' }],
//                     })(
//                         <TextArea placeholder="文章内容" autosize={{ minRows: 10, maxRows: 20 }} />
//                     )}
//                 </FormItem>
//             </Form>
//         );
//     }
// }
