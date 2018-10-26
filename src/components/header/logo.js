import React from 'react';
import { Link } from 'react-router-dom';
import { info } from '../../config';
import logoUrl from '../../assets/logo.svg';

const clickInfo = () => {
  info('回到首页！');
};

const HeaderLogo = () => (
  <Link to="/" className="header-logo d-flex flex-items-center" title="logo" onClick={ clickInfo }>
    <img src={ logoUrl } className="logo-img" alt="logo"></img>
    <span className="logo-text">CandyBullet</span>
  </Link>
);

export default HeaderLogo;


