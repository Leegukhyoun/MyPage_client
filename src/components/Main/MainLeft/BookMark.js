import React from 'react';
import BookMemo from './BookMemo';

const BookMark = ({info}) => {
    return (
        <div id='bookmark'>
            <div id='todoList'>
                <div id='todoItem'>
                    <ul>
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
            </div>
        </div>
    );
};

export default BookMark;