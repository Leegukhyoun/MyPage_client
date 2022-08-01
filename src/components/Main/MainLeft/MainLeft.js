import React from 'react';
import BookMark from './BookMark';
import MyPage from './MyPage';

const MainLeft = () => {
    return (
        <div id='mainleft'>
            <MyPage/>
            <BookMark/>
        </div>
    );
};

export default MainLeft;