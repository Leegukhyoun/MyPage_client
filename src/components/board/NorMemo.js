import React from 'react';
import NorLeft from './NorLeft';
import NorRight from './NorRight';

const NorMemo = ({info, data}) => {
    return (
        <div className='subinner subindex'>
            <NorLeft user={info[0]} data={data}/>
            <NorRight data={data}/>
        </div>
    );
};

export default NorMemo;