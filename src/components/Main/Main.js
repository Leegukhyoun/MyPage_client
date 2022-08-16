import React from 'react';
import MainClock from './MainClock';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';

const Main = ({info, openBMW, onBMWOn, onBMWOff}) => {
    return (
        <div id='mainIndex'>
            <div id='maindivide' className='inner'>
                <MainLeft info={info} openBMW={openBMW} onBMWOn={onBMWOn} onBMWOff={onBMWOff}/>
                <MainRight pic={info[9]} nor={info[8]} dday={info[4]}/>
                <MainClock />
            </div>
        </div>
    );
};

export default Main;