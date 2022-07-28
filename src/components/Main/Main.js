import React from 'react';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';

const Main = () => {
    return (
        <div id='mainIndex'>
            <div id='maindivide' className='inner'>
                <MainLeft />
                <MainRight />
            </div>
        </div>
    );
};

export default Main;