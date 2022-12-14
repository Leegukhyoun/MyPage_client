import React, { useEffect } from 'react';
import BookMemo from './BookMemo';
import { BsPencil } from 'react-icons/bs';
import BookMemoWindow from './BookMemoWindow';

const BookMark = ({info, openBMW, onBMWOn, onBMWOff}) => {
    return (
        <div id='bookmark'>
            <div id='todoList'>
                <div id='todoItem'>
                    <ul>
                        <li className='emerMemoTitle'><BsPencil/><p>간단메모</p></li>
                        {info.map(info=>
                            <BookMemo info={info} key={info.id}/>
                            )}
                    </ul>
                </div>
                <div id='todoAdd'>
                    <div id='todoBtn' onClick={onBMWOn}>
                        <span className='todoPlusBtn'></span>
                        <span className='todoPlusBtn'></span>
                    </div>
                </div>
                <BookMemoWindow openBMW={openBMW} onBMWOff={onBMWOff}/>
            </div>
        </div>
    );
};

export default BookMark;