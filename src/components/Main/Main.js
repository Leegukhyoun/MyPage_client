import React from 'react';
import MainFixed from './MainFixed';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';

const Main = ({info, openBMW, onBMWOn, onBMWOff}) => {
    return (
        <div id='mainIndex'>
            <div id='maindivide' className='inner'>
                <MainLeft info={info} openBMW={openBMW} onBMWOn={onBMWOn} onBMWOff={onBMWOff}/>
                <MainRight pic={info[3]} nor={info[1]} dday={info[4]}/>
                <MainFixed />
            </div>
        </div>
    );
};

export default Main;