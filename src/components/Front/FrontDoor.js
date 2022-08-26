import { Carousel } from 'antd';
import React from 'react';
import "antd/dist/antd.css";
import FrontWindow from './FrontWindow';
import { API_URL } from '../../config/apiurl';

const contentStyle = {
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

const FrontDoor = () => (
  <>
  <div id='slider'>
  <Carousel effect="fade" autoplay dots={false}>
    <div className='sliderImg'>
      <img src={`${API_URL}/upload/pen-and-computer-keyboard-on-woo.png`} alt='' />
    </div>
    <div className='sliderImg'>
      <img src={`${API_URL}/upload/wallpaperbetter.com_1920x1080.jpg`} alt='' />
    </div>
    <div className='sliderImg'>
      <img src={`${API_URL}/upload/AE6D7E99E242454D9B60B82E9C7313A5.jpg`} alt='' />
    </div>
  </Carousel>
  </div>
  <FrontWindow />
  </>
);

export default FrontDoor;