import React from 'react';
import { API_URL } from '../../config/apiurl';
import { Link } from 'react-router-dom';

const PicLeft = ({user}) => {
    return (
        <div className='subLeft'>
            <div className='subMyPage'>
                <div className='subImgSize'>
                    <img src={`${API_URL}/upload/${user.img}`} alt='#' />
                </div>
                <p className='subName'>{`${user.name}`}</p>
                <p className='subEmail'>{`${user.email1}`}@{`${user.email2}`}</p>
            </div>
            <div className='subMenu'>
                <ul>
                    <Link to="/myinfo"><li><p>내 정보</p></li></Link>
                    <Link to="/bookmark"><li><p>북마크 관리</p></li></Link>
                    <Link to="/callnumber"><li><p>전화번호부</p></li></Link>
                    <Link to="/normemo"><li><p>일반 메모</p></li></Link>
                    <li className='subSelect'><p>사진 메모</p></li>
                </ul>
            </div>
        </div>
    );
};

export default PicLeft;