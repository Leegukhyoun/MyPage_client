import React from 'react';
import moment from 'moment';

const NorRightList = ({info}) => {
    const Date = moment(info.nowDate).format('MM-DD');
    
    return (
        <ul id='norList'>
            <li>{Date}</li>
            <li>{info.title}</li>
            <li>{info.name}</li>
        </ul>
    );
};

export default NorRightList;