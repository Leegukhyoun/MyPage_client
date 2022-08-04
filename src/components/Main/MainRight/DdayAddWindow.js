import React from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
import { Calender } from './Calendar/Calender';
import { toggleDAW } from '../../../module/pageutils';
import { useSelector, useDispatch } from 'react-redux';


const DdayAddWindow = () => {
    const dispatch = useDispatch();
    const { openDAW } = useSelector(state=>state.pageutils.utils);
    const DAWBtn = () => {
        dispatch(toggleDAW());
    }
    return (
        <div id='DdayAdd' style={{ display: openDAW ? 'block' : 'none' }}>
            <div id='DAWbg' onClick={DAWBtn}></div>
            <div id='DdayAddWindow'>
                <form>
                    <div id='DAW'>
                        <div id='DAWXcircle' onClick={DAWBtn}><BsFillXCircleFill /></div>
                        <h1>D-DAY 등록</h1>
                        <div id='DAWCal'><Calender /></div>
                        <input type="hidden" name='ddaydate' />
                        <p>날짜를 선택하고 내용을 입력해주세요.</p>
                        <input name='ddaytext' placeholder='내용을 입력해주세요.' />
                        <button type='submit'>등록</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DdayAddWindow;