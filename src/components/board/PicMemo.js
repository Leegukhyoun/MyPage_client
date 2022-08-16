import React from 'react';
import PicLeft from './PicLeft';
import PicRight from './PicRight';

const PicMemo = ({info, data}) => {
    return (
        <div className='subinner subindex'>
            <PicLeft user={info[0]} data={data}/>
            <PicRight data={data}/>
        </div>
    );
};

export default PicMemo;