import React from 'react';
import { API_URL } from '../../../config/apiurl';

const PicItemVoid = ({pic}) => {
    return (
        <>
        <ul className='picboard' style={{display : pic.length < 1 ? "block" : "none"}}>
            <li><img src={`${API_URL}/upload/no-image.png`} alt='' style={{objectFit : 'contain'}}/></li>
            <li style={{border : 'none', background : 'none'}}>
                <h5 style={{color : '#ccc', textAlign : 'right'}}>등록된 사진이 없습니다.</h5>
            </li>
            <div className='blackbg'><p>사진 등록</p></div>
        </ul>
        <ul className='picboard' style={{display : pic.length < 2 ? "block" : "none"}}>
            <li><img src={`${API_URL}/upload/no-image.png`} alt='' style={{objectFit : 'contain'}}/></li>
            <li style={{border : 'none', background : 'none'}}>
                <h5 style={{color : '#ccc', textAlign : 'right'}}>등록된 사진이 없습니다.</h5>
            </li>
            <div className='blackbg'><p>사진 등록</p></div>
        </ul>
        <ul className='picboard' style={{display : pic.length < 3 ? "block" : "none"}}>
            <li><img src={`${API_URL}/upload/no-image.png`} alt='' style={{objectFit : 'contain'}}/></li>
            <li style={{border : 'none', background : 'none'}}>
                <h5 style={{color : '#ccc', textAlign : 'right'}}>등록된 사진이 없습니다.</h5>
            </li>
            <div className='blackbg'><p>사진 등록</p></div>
        </ul>
        <ul className='picboard' style={{display : pic.length < 4 ? "block" : "none"}}>
            <li><img src={`${API_URL}/upload/no-image.png`} alt='' style={{objectFit : 'contain'}}/></li>
            <li style={{border : 'none', background : 'none'}}>
                <h5 style={{color : '#ccc', textAlign : 'right'}}>등록된 사진이 없습니다.</h5>
            </li>
            <div className='blackbg'><p>사진 등록</p></div>
        </ul>
        </>
    );
};

export default PicItemVoid;