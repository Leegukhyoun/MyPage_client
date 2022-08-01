import { Carousel } from 'antd';
import React from 'react';
import "antd/dist/antd.css";
import LoginContainer from '../../container/LoginContainer';

const contentStyle = {
  height: `100vh`,
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

const FrontDoor = () => (
  <>
  <Carousel effect="fade" autoplay dots={false}>
    <div>
      <img src='images/i16272991965.png' alt='' />
    </div>
    <div>
      <img src='images/i16272991965.png' alt='' />
    </div>
    <div>
      <img src='images/i16272991965.png' alt='' />
    </div>
    <div>
      <img src='images/i16272991965.png' alt='' />
    </div>
  </Carousel>
  <LoginContainer/>
  </>
);

export default FrontDoor;