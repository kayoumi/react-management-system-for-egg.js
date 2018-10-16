import React from 'react';
import { info } from '../../config';
import './index.less';
import logoUrl from '../../assets/logo.svg';

const clickInfo = () => {
  info('点击LOGO！');
};

const HeaderLogo = () => (
  <a className="logo-box d-flex flex-items-center" href="#" title="logo" onClick={ clickInfo }>
    <img src={ logoUrl } className="logo-img" alt="logo"></img>
    <span className="logo-text">CandyBullet</span>
  </a>
);

export default HeaderLogo;
