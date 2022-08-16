import React from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config/apiurl';

const PicItem = ({Data}) => {

    const navigate = useNavigate();

    const goImgview = (e) => {
        e.preventDefault();
        navigate(`/picmemodetail/${Data.id}`);
    }
    return (
        <ul className='picboard'>
            <li><img src={`${API_URL}/upload/${Data.picImg}`} alt='' /></li>
            <li>
                <h5>{Data.pictitle}</h5>
            </li>
            <div className='blackbg'><p onClick={goImgview}>자세히보기</p></div>
        </ul>
    );
};

export default PicItem;