import { Carousel } from 'antd';
import React from 'react';
import "antd/dist/antd.css";
import FrontWindow from './FrontWindow';

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
  <FrontWindow />
  </>
);

export default FrontDoor;