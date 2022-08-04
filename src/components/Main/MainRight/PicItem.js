import React from 'react';
import { API_URL } from '../../../config/apiurl';

const PicItem = ({Data}) => {
    return (
        <ul className='picboard'>
            <li><img src={`${API_URL}/upload/${Data.picImg}`} alt='' /></li>
            <li>
                <h5>{Data.pictitle}</h5>
                <p>
                    <div className='userIcon'>
                        <img src={`${API_URL}/upload/${Data.img}`} alt='' />
                    </div>
                    <div className='picName'>
                        {Data.name}
                    </div>
                </p>
            </li>
            <div className='blackbg'><p>자세히보기</p></div>
        </ul>
    );
};

export default PicItem;