import React from 'react';
import BookMemo from './BookMemo';
import { BsPencil } from 'react-icons/bs';
import BookMemoWindow from './BookMemoWindow';

const BookMark = ({info}) => {
    return (
        <div id='bookmark'>
            <div id='todoList'>
                <div id='todoItem'>
                    <ul>
                        <li className='emerMemoTitle'><BsPencil/><p>간단메모</p></li>
                        {info.map(info=>
                            <BookMemo info={info}/>
                            )}
                    </ul>
                </div>
                <div id='todoAdd'>
                    <div id='todoBtn'>
                        <span className='todoPlusBtn'></span>
                        <span className='todoPlusBtn'></span>
                    </div>
                </div>
                <BookMemoWindow/>
            </div>
        </div>
    );
};

export default BookMark;