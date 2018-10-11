import React from 'react';
import { message } from 'antd';
import './index.less';
import logoUrl from '../../assets/logo.svg';

const info = () => {
    message.info('This is a normal message', 1);
};

const HeaderLogo = () => (
    <a className="logo-box d-flex" href="#" title="logo" onClick={ info }>
        <img src={ logoUrl } className="logo-img" alt="logo"></img>
        <span className="logo-text d-flex">CandyBullet</span>
    </a>
);

export default HeaderLogo;