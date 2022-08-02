import React from 'react';
import BookMark from './BookMark';
import MyPage from './MyPage';

const MainLeft = ({info}) => {
    return (
        <div id='mainleft'>
            <MyPage info={info[0]}/>
            <BookMark info={info[2]}/>
        </div>
    );
};

export default MainLeft;