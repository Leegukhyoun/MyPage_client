import React from 'react';
import SubLeft from './SubLeft';
import SubRight from './SubRight';

const BookMarkManager = ({info, data, toggleBMADD, BMAddBtn, BMADD, setBMAddInput, setBMAddReset, setBMAddUserid, addBM, setOffBMADD}) => {
    const user = info[0];
    return (
        <div className='subinner subindex'>
            <SubLeft user={user}/>
            <SubRight info={data} toggleBMADD={toggleBMADD} BMAddBtn={BMAddBtn} BMADD={BMADD} setBMAddInput={setBMAddInput} setBMAddReset={setBMAddReset} setBMAddUserid={setBMAddUserid} addBM={addBM} setOffBMADD={setOffBMADD}/>
        </div>
    );
};

export default BookMarkManager;