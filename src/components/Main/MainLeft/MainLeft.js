import React from 'react';
import BookMark from './BookMark';
import MyPage from './MyPage';

const MainLeft = ({info, openBMW, onBMWOn, onBMWOff}) => {
    return (
        <div id='mainleft'>
            <MyPage info={info[0]}/>
            <BookMark info={info[2]} openBMW={openBMW} onBMWOn={onBMWOn} onBMWOff={onBMWOff}/>
        </div>
    );
};

export default MainLeft;