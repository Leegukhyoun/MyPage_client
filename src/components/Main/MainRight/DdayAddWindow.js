import React from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
import { Calender } from './DAWCalendar/Calender';
import { toggleDAW } from '../../../module/pageutils';
import { useSelector, useDispatch } from 'react-redux';
import { addDday, setDdayInput, setDdayReset, setDdayUserid } from '../../../module/memoIndex';
import { getCookie } from '../../../util/cookie';
import { pointUser } from '../../../module/loginIndex';

const DdayAddWindow = () => {
    const dispatch = useDispatch();
    const { openDAW } = useSelector(state=>state.pageutils.utils);
    const data = useSelector(state=>state.memoIndex.dday);
    const userid = getCookie('userid');
    const DAWBtn = () => {
        dispatch(toggleDAW());
        dispatch(setDdayReset());
    }
    const onChange = (e) => {
        dispatch(setDdayInput(e));
        dispatch(setDdayUserid(userid));
    }
    const addDdayMemo = (e) => {
        e.preventDefault();
        if(!data.datetext){
            DAWBtn();
        } else {
            dispatch(addDday());
            DAWBtn();
            dispatch(pointUser());
        }
    }
    return (
        <div id='DdayAdd' style={{ display: openDAW ? 'block' : 'none' }}>
            <div id='DAWbg' onClick={DAWBtn}></div>
            <div id='DdayAddWindow'>
                <form onSubmit={addDdayMemo}>
                    <div id='DAW'>
                        <div id='DAWXcircle' onClick={DAWBtn}><BsFillXCircleFill /></div>
                        <h1>D-DAY 등록</h1>
                        <div id='DAWCal'><Calender /></div>
                        <input type="text" name='ddaydate' defaultValue={data.datetext} autoComplete='off' spellCheck="false"/>
                        <p>날짜를 선택하고 내용을 입력해주세요.</p>
                        <input name='ddaytext' placeholder='내용을 입력해주세요.' onChange={onChange} autoComplete='off' spellCheck="false"/>
                        <button type='submit'>등록</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DdayAddWindow;