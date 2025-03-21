import React from 'react';
import './App.css';
import { Col, Row } from 'antd';
import * as VKID from '@vkid/sdk';


function App() {

  VKID.Config.init({
    app: 53306336,
    redirectUrl: 'https://stanislawpivovarov.github.io/vk_video_shuffler/',
  });

  VKID.Auth.login();


  return (

    <div className="App">
      <Row justify={'center'}>
        <Col span={10}>
        </Col>
        <Col span={10}>
        </Col>
        <Col span={10}>
        </Col>
      </Row>

    </div>
  );
}

export default App;
