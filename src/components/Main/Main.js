import React from 'react';
import MainFixed from './MainFixed';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';

const Main = ({info, right}) => {
    return (
        <div id='mainIndex'>
            <div id='maindivide' className='inner'>
                <MainLeft info={info}/>
                <MainRight right={right}/>
                <MainFixed />
            </div>
        </div>
    );
};

export default Main;