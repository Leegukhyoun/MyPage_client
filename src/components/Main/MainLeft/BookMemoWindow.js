import React from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
const BookMemoWindow = ({openBMW, onBMWOff}) => {
    return (
        <div style={{ display: openBMW ? 'block' : 'none' }}>
            <div id='BMWbg' onClick={onBMWOff}></div>
            <div id='BookMemoWindow'>
                <form>
                    <div id='BMW'>
                        <div id='BMWXcircle' onClick={onBMWOff}><BsFillXCircleFill /></div>
                        <h1>간단 메모 등록</h1>
                        <input name='BMWinput' placeholder='메모를 입력해주세요.' />
                        <button>등록</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookMemoWindow;