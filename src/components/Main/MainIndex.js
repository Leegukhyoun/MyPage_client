import React from 'react';
import Main from './Main';


const MainIndex = ({info, openBMW, onBMWOn, onBMWOff}) => {
    return (
        <>
        <Main info={info} openBMW={openBMW} onBMWOn={onBMWOn} onBMWOff={onBMWOff}/>
        </>
    );
};

export default MainIndex;