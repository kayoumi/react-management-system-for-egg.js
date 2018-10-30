import React from 'react';
import { Tabs } from 'antd';
import yaml from 'yamljs';
import './index.less';
import yamlData from '../../data/data.yml';
import yamlData2 from '../../data/data.yaml.js';

const parsedYamlData = yaml.load(yamlData);
const parsedYamlData2 = yaml.parse(yamlData2);

const TabOperation = () => {
    console.log(yamlData);
    console.log(yamlData2);
    console.log(parsedYamlData);
    console.log(parsedYamlData2);
    return (
        <div>
            这里写：用户操作
            { parsedYamlData.contact[1].icon }
            { parsedYamlData2.contact[0].icon }
        </div>
    );
}

export default TabOperation;
