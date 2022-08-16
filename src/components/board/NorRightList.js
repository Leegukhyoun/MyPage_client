import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const NorRightList = ({info}) => {
    const Date = moment(info.nowDate).format('MM-DD');
    
    return (
        <ul id='norList'>
            <li><Link to={`/normemodetail/${info.id}`}>{info.title}</Link></li>
            <li>{Date}</li>
        </ul>
    );
};

export default NorRightList;