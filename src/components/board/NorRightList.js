import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const NorRightList = ({info}) => {
    const Date = moment(info.nowDate).format('MM-DD');
    
    return (
        <ul id='norList'>
            <li>{Date}</li>
            <li><Link to={`/normemodetail/${info.id}`}>{info.title}</Link></li>
        </ul>
    );
};

export default NorRightList;