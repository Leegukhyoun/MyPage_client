import React from 'react';
import { API_URL } from '../../config/apiurl';
import { Link } from 'react-router-dom';

const NorLeft = ({user}) => {
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
                <li><p>내 정보</p></li>
                <Link to="/bookmark"><li><p>북마크 관리</p></li></Link>
                <li><p>전화번호부</p></li>
                <li className='subSelect'><p>일반 메모</p></li>
                <li><p>사진 메모</p></li>
            </ul>
        </div>
    </div>
    );
};

export default NorLeft;