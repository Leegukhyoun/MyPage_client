import React from 'react';

const BookMark = () => {
    return (
        <div id='bookmark'>
            <div id='todoList'>
                <div id='todoItem'>
                    <ul>
                        <li>
                            <div id='itemText'><p>감자 3개 고구마 2개 사오기</p></div>
                            <div id='itemDel'>
                                <div>
                                    <span className='itemBtn'></span>
                                    <span className='itemBtn'></span>
                                </div>
                            </div>
                        </li>
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