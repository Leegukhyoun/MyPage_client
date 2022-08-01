import React from 'react';
import BookMark from './BookMark';
import MyPage from './MyPage';

const MainLeft = ({info}) => {
    return (
        <div id='mainleft'>
            <MyPage info={info}/>
            <BookMark info={info}/>
        </div>
    );
};

export default MainLeft;