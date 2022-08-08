import React from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setEmerReset, setEmer, setUserid, addEmer } from '../../../module/memoIndex';
import { getCookie } from '../../../util/cookie';
import { pointUser } from '../../../module/loginIndex';

const BookMemoWindow = ({openBMW, onBMWOff}) => {
    const emer = useSelector(state=>state.memoIndex.emer);
    const userid = getCookie('userid');
    const dispatch = useDispatch();
    const XClick = () => {
        onBMWOff();
        dispatch(setEmerReset());
    }
    const setEmertext = (e) => {
        dispatch(setEmer(e));
        dispatch(setUserid(userid));
    }
    const addEmerMemo = (e) => {
        e.preventDefault();
        dispatch(addEmer());
        XClick();
        dispatch(pointUser());
    }
    
    return (
        <>
        <div style={{ display: openBMW ? 'block' : 'none' }}>
            <div id='BMWbg' onClick={XClick}></div>
            <div id='BookMemoWindow'>
                <form onSubmit={addEmerMemo}>
                    <div id='BMW'>
                        <div id='BMWXcircle' onClick={XClick}><BsFillXCircleFill /></div>
                        <h1>간단 메모 등록</h1>
                        <input name='emertext' value={emer.emertext} onChange={setEmertext} placeholder='메모를 입력해주세요.' autocomplete='off' spellcheck="false"/>
                        <button type='submit'>등록</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default BookMemoWindow;