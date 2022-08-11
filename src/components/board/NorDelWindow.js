import React from 'react';
import { useSelector } from 'react-redux';

const NorDelWindow = ({data, NMdelete, NDWBtn}) => {
    const { toggleNDW } = useSelector(state=>state.pageutils.utils);
    return (
        <>
        <div style={{display : toggleNDW ? 'block' : 'none'}}>
        <div id='NDWbg' onClick={NDWBtn}></div>
        <div id='NDW'>
            <div id='NDWWindow'>
                <h1>{`${data.title}`}</h1>
                <h2>위 메모를 삭제합니다.</h2>
                <p>삭제된 메모는 복원이 불가능합니다.</p>
            </div>
            <div id='NDWBtns'>
                <button onClick={NMdelete}>삭제</button>
                <button onClick={NDWBtn}>취소</button>
            </div>
        </div>
        </div>
        </>
    );
};

export default NorDelWindow;