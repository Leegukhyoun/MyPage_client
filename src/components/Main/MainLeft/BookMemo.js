import React from 'react';

const BookMemo = ({info}) => {
    return (
        <li>
            <div id='itemText'><p>{info.memo}</p></div>
            <div id='itemDel'>
                <div>
                    <span className='itemBtn'></span>
                    <span className='itemBtn'></span>
                </div>
            </div>
        </li>
    );
};

export default BookMemo;