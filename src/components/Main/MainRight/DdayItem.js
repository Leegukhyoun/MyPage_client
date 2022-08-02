import React from 'react';

const DdayItem = ({dday}) => {
    const selectDate = new Date(dday.date);
    const nowDate = new Date();
    const diff = selectDate - nowDate;
    const diffDay = Math.floor(diff / (1000*60*60*24)) + 1;
    const text = diffDay === 0 ? '당일입니다.' : `${diffDay}일 남았습니다.` ; 
    return (
        <div className='ddayDiv'>
            <div>날짜 : </div>
            <div>{dday.date}</div>
            <div>내용 : </div>
            <div>{dday.ddayDesc}</div>
            <div style={{
                background:
                diffDay === 2 ? "#ffb0b0" :
                diffDay === 1 ? "#ff8c8c" :
                diffDay === 0 ? "#ff5050" : ""
            }}>{text}</div>
        </div>
    );
};

export default DdayItem;