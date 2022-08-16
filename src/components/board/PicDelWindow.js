import React from 'react';
import { useSelector } from 'react-redux';

const PicDelWindow = ({data, PMdelete, PDWBtn}) => {
    const { togglePDW } = useSelector(state=>state.pageutils.utils);
    console.log(data);
    return (
        <>
        <div style={{display : togglePDW ? 'block' : 'none'}}>
        <div id='NDWbg' onClick={PDWBtn}></div>
        <div id='NDW'>
            <div id='NDWWindow'>
                <h1>{`${data.pictitle}`}</h1>
                <h2>위 메모를 삭제합니다.</h2>
                <p>삭제된 메모는 복원이 불가능합니다.</p>
            </div>
            <div id='NDWBtns'>
                <button onClick={PMdelete}>삭제</button>
                <button onClick={PDWBtn}>취소</button>
            </div>
        </div>
        </div>
        </>
    );
};

export default PicDelWindow;