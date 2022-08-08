import React from 'react';
import DdayDelete from './DdayDelete';
import axios from 'axios';
import { API_URL } from '../../../config/apiurl';
import { useDispatch } from 'react-redux';
import { pointUser } from '../../../module/loginIndex';

const DdayItem = ({dday}) => {
    const selectDate = new Date(dday.date);
    const nowDate = new Date();
    const diff = selectDate - nowDate;
    const diffDay = Math.floor(diff / (1000*60*60*24)) + 1;
    const text = diffDay === 0 ?
        '당일입니다.' :
        diffDay < 0 ?
        '지난 날짜입니다.' :
        `${diffDay}일 남았습니다.`;

    const dispatch = useDispatch();
    function ddaydel(e) {
        e.preventDefault();
        axios.delete(`${API_URL}/deldday/${dday.id}`)
            .then((result) => {
                dispatch(pointUser());
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <>
            <div className='ddayDiv'>
                <div>날짜 : </div>
                <div>
                    {dday.date}
                </div>
                <div>내용 : </div>
                <div>{dday.ddayDesc}</div>
                <div style={{
                    background:
                    diffDay === 2 ? "#ffb0b0" :
                    diffDay === 1 ? "#ff8c8c" :
                    diffDay === 0 ? "#ff5050" :
                    diffDay < 0 ? "#999" : ""
                }}>{text}</div>
                <button onClick={ddaydel}>삭제</button>
            </div>
        </>
    );
};

export default DdayItem;