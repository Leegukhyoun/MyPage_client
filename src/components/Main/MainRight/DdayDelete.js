import React from 'react';

const DdayDelete = ({dday}) => {
    console.log(dday);
    return (
        <div id='DdayDelete'>
            <div className='blackBg'></div>
            <div id='DdayDeleteWindow'>
                <div id='DDW'>
                    <h1>D-DAY 삭제</h1>
                    <p><p>{dday.ddayDesc}</p> 항목을 삭제합니다.</p>
                    <div>
                        <button type='submit'>확인</button>
                        <button>취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DdayDelete;