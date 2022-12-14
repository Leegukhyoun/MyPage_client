import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

const NorMemoView = ({Data}) => {
    const date = moment(Data.nowDate).format('MM-DD');
    return (
        <li>
            <ul>
                <li><span><Link to={`/normemodetail/${Data.id}`}>{Data.title}</Link></span></li>
                <li>{date}</li>
            </ul>
        </li>
    );
};

export default NorMemoView;