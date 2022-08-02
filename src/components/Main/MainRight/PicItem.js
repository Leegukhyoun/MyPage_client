import React from 'react';

const PicItem = ({Data}) => {
    return (
        <ul className='picboard'>
            <li><img src={`images/${Data.picImg}`} alt='' /></li>
            <li>
                <h5>{Data.pictitle}</h5>
                <p>
                    <div className='userIcon'>
                        <img src={`images/${Data.img}`} alt='' />
                    </div>
                    <div className='picName'>
                        {Data.name}
                    </div>
                </p>
            </li>
            <div className='blackbg'><p>자세히보기</p></div>
        </ul>
    );
};

export default PicItem;