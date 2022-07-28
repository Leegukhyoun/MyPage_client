import React from 'react';

const MainRight = () => {
    return (
        <div id='mainright'>
            <div id='rightTop'>
                <div id='picView'>
                    <ul className='picboard'>
                        <li><img src='images/messi.jpg' alt='' /></li>
                        <li>
                            <h5>웰시코기 메시</h5>
                            <p>오영택</p>
                        </li>
                    </ul>
                    <div className='blackbg'><p>자세히보기</p></div>
                </div>
                <div id='boaCal'>
                    <div id='board'>

                    </div>
                    <div id='calendar'>

                    </div>
                </div>
            </div>
            <div id='rightBot'>

            </div>
        </div>
    );
};

export default MainRight;