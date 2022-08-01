import React from 'react';
import MainFixed from './MainFixed';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';

const Main = () => {
    return (
        <div id='mainIndex'>
            <div id='maindivide' className='inner'>
                <MainLeft />
                <MainRight />
                <MainFixed />
            </div>
        </div>
    );
};

export default Main;