import React, { Component } from 'react';
import { Button, Steps, Icon } from 'antd';
import './App.css';

const Step = Steps.Step;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Steps>
          <Step status="finish" title="Login" icon={<Icon type="user" />} />
          <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
          <Step status="process" title="Pay" icon={<Icon type="loading" />} />
          <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
        </Steps>
        <Icon type="down-circle-o" />
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
