import React from 'react';
import MainFixed from './MainFixed';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';

const Main = ({info}) => {
    return (
        <div id='mainIndex'>
            <div id='maindivide' className='inner'>
                <MainLeft info={info}/>
                <MainRight pic={info[3]} nor={info[1]} dday={info[4]}/>
                <MainFixed />
            </div>
        </div>
    );
};

export default Main;