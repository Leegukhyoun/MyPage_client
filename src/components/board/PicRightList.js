import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config/apiurl';

const PicRightList = ({info}) => {
    const Date = moment(info.nowDate).format('MM-DD');
    return (
        <>
        <Link to={`/picmemodetail/${info.id}`}>
        <ul id='picList'>
            <li><img src={`${API_URL}/upload/${info.picImg}`} alt='' /></li>
            <li>{info.pictitle}</li>
            <li>{Date}</li>
        </ul>
        </Link>
        </>
    );
};

export default PicRightList;