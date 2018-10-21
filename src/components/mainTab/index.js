import React from 'react';
import { Tabs } from 'antd';
import MainTabOverview from '../mainTabOverview';
import MainTabWrite from '../mainTabWrite';
import MainTabPersonal from '../mainTabPersonal';
import MainTabAll from '../mainTabAll';
import MainTabOperation from '../mainTabOperation';
import './index.less';

const TabPane = Tabs.TabPane;
const isSuperAdmin = 1 == 1 ? false : true;

const initTab = (tab) => {
    switch(tab) {
        case 'overview':
            return '1';
        case 'write':
            return '2';
        case 'personal':
            return '3';
        case 'all':
            return '4';
        case 'operation':
            return '5';
        default:
            return '1';
    }
}

const MainTab = ({ tab, setPathname }) => (
    <Tabs defaultActiveKey={ initTab(tab) } onChange={ setPathname }>
        <TabPane tab="动态" key="1">
            <MainTabOverview></MainTabOverview>
        </TabPane>
        <TabPane tab="写文章" key="2">
            <MainTabWrite></MainTabWrite>
        </TabPane>
        <TabPane tab="个人文章" key="3">
            <MainTabPersonal></MainTabPersonal>
        </TabPane>
        <TabPane tab="全部文章" key="4">
            <MainTabAll></MainTabAll>
        </TabPane>
        <TabPane tab="用户操作" disabled={ isSuperAdmin } key="5">
            <MainTabOperation></MainTabOperation>
        </TabPane>
        <TabPane tab="haha" disabled={ isSuperAdmin } key="6">
            <p>{ tab }</p>
        </TabPane>
    </Tabs>
);

export default MainTab;
