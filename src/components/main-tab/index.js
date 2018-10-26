import React from 'react';
import { Tabs } from 'antd';
import TabOverview from './overview';
import TabWrite from './write';
import TabPersonal from './personal';
import TabAll from './all';
import TabOperation from './operation';
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
    <Tabs activeKey={ initTab(tab) }  onChange={ setPathname }>
        <TabPane tab="动态" key="1">
            <TabOverview></TabOverview>
        </TabPane>
        <TabPane tab="写文章" key="2">
            <TabWrite></TabWrite>
        </TabPane>
        <TabPane tab="个人文章" key="3">
            <TabPersonal></TabPersonal>
        </TabPane>
        <TabPane tab="全部文章" key="4">
            <TabAll></TabAll>
        </TabPane>
        <TabPane tab="用户操作" disabled={ isSuperAdmin } key="5">
            <TabOperation></TabOperation>
        </TabPane>
    </Tabs>
);

export default MainTab;
