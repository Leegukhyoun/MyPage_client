import React from 'react';
import { useSelector } from 'react-redux';

const NorAlldel = ({toggleNorAllbtn, NorAlldelete}) => {
    const { toggleNorAll } = useSelector(state=>state.pageutils.utils);
    return (
        <div style={{ display: toggleNorAll ? 'block' : 'none' }}>
            <div className='AlldelBg' onClick={toggleNorAllbtn}></div>
            <div className='AlldelWindow'>
                <div className='AlldelPage'>
                    <h2>일반 메모 모두 삭제</h2>
                    <p>메모를 정말로 삭제 하시겠습니까?</p>
                    <p>잃은 데이터는 되돌릴 수 없습니다.</p>
                    <div className='AlldelBtns'>
                        <button onClick={NorAlldelete}>삭제</button>
                        <button onClick={toggleNorAllbtn}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NorAlldel;