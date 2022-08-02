import React from 'react';
import DdayItem from './DdayItem';
import DdayItemVoid from './DdayItemVoid';

const RightDday = ({dday}) => {
    return (
        <div id='DDay'>
            {dday.map(dday =>
                <DdayItem dday={dday} key={dday.id} />
            )}
            <DdayItemVoid dday={dday}/>
        </div>
    );
};

export default RightDday;