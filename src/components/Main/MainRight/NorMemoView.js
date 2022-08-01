import React from 'react';
import moment from 'moment';

const NorMemoView = ({Data}) => {
    const date = moment(Data.nowDate).format('MM-DD');
    return (
        <li>
            <ul>
                <li>{date}</li>
                <li><span>{Data.title}</span></li>
                <li>{Data.name}</li>
            </ul>
        </li>
    );
};

export default NorMemoView;