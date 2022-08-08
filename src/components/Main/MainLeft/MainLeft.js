import React from 'react';
import BookMark from './BookMark';
import MyPage from './MyPage';
import RealBM from './RealBM';

const MainLeft = ({info, openBMW, onBMWOn, onBMWOff}) => {
    return (
        <div className='mainleft'>
            <MyPage info={info[0]}/>
            <BookMark info={info[2]} openBMW={openBMW} onBMWOn={onBMWOn} onBMWOff={onBMWOff}/>
            <RealBM info={info[5]} outerBM={info[6]}/>
        </div>
    );
};

export default MainLeft;