import React, { useState } from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { openBMW } from '../../../module/pageutils';
const BookMemoWindow = () => {
    const { openBMW } = useSelector(state=>state.pageutils.utils);
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(openBMW);      //내일 와서 온 오프 따로만들고 컨테이너로 만들어
    }
    return (
        <div style={{display : openBMW ? 'block' : 'none'}}>
        <div id='BMWbg'></div>
        <div id='BookMemoWindow'>
            <form>
                <div id='BMW'>
                    <div id='BMWXcircle'><BsFillXCircleFill/></div>
                    <h1>간단 메모 등록</h1>
                    <input name='BMWinput' placeholder='메모를 입력해주세요.'/>
                    <button>등록</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default BookMemoWindow;