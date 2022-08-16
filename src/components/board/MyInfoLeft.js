import React from 'react';
import { useSelector } from 'react-redux';
import { API_URL } from '../../config/apiurl';
import { Link } from 'react-router-dom';

const MyInfoLeft = () => {
    const { data, loading, error } = useSelector(state=>state.loginIndex.user);

    if(loading) return <div id='loading'><img src={`${API_URL}/upload/3305803.png`} alt=''/></div>
    if(error) return <div>에러 발생</div>
    if(!data) return null;
    return (
        <div className='subLeft'>
            <div className='subMyPage'>
                <div className='subImgSize'>
                    <img src={`${API_URL}/upload/${data[0][0].img}`} alt='#' />
                </div>
                <p className='subName'>{`${data[0][0].name}`}</p>
                <p className='subEmail'>{`${data[0][0].email1}`}@{`${data[0][0].email2}`}</p>
            </div>
            <div className='subMenu'>
                <ul>
                    <li className='subSelect'><p>내 정보</p></li>
                    <Link to="/bookmark"><li><p>북마크 관리</p></li></Link>
                    <Link to="/callnumber"><li><p>전화번호부</p></li></Link>
                    <Link to="/normemo"><li><p>일반 메모</p></li></Link>
                    <Link to="/picmemo"><li><p>사진 메모</p></li></Link>
                </ul>
            </div>
        </div>
    );
};

export default MyInfoLeft;