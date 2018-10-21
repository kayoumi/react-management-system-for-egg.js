import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './main';
import Login from './login';
import SignUp from './signUp';

const parts = [{
  key: '主体',
  path: '/',
  component: Main
}, {
  key: '标签页',
  path: '/tab/:id',
  component: Main
}, {
  key: '登录',
  path: '/login',
  component: Login
}, {
  key: '注册',
  path: '/signUp',
  component: SignUp
}];

class Routes extends Component {
  render() {
    return (
			<div>
				{parts.map(({ key, path, component }) => (
					<Route exact key={key} path={path} component={component}/>
					))}
			</div>
    );
  }
}

export default Routes;
