import React from 'react';
import { toggleDAW } from '../../../module/pageutils';
import { useDispatch } from 'react-redux';

const DdayItemVoid = ({dday}) => {
    const dispatch = useDispatch();
    const DAWBtn = () => {
        dispatch(toggleDAW());
    }
    return (
        <>
        <div className='ddayDiv' style={{display : dday.length < 1 ? "block" : "none"}} onClick={DAWBtn}>
            <div>날짜 : </div>
            <div>-</div>
            <div>내용 : </div>
            <div>-</div>
            <div>내용을 등록 해주세요.</div>
        </div>
        <div className='ddayDiv' style={{display : dday.length < 2 ? "block" : "none"}} onClick={DAWBtn}>
            <div>날짜 : </div>
            <div>-</div>
            <div>내용 : </div>
            <div>-</div>
            <div>내용을 등록 해주세요.</div>
        </div>
        <div className='ddayDiv' style={{display : dday.length < 3 ? "block" : "none"}} onClick={DAWBtn}>
            <div>날짜 : </div>
            <div>-</div>
            <div>내용 : </div>
            <div>-</div>
            <div>내용을 등록 해주세요.</div>
        </div>
        <div className='ddayDiv' style={{display : dday.length < 4 ? "block" : "none"}} onClick={DAWBtn}>
            <div>날짜 : </div>
            <div>-</div>
            <div>내용 : </div>
            <div>-</div>
            <div>내용을 등록 해주세요.</div>
        </div>
        </>
    );
};

export default DdayItemVoid;