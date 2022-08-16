import React from 'react';
import { useSelector } from 'react-redux';


const InfoDel = ({ userdata, toggleMIWbtn, NMAlldelete }) => {
    const { toggleMIW } = useSelector(state=>state.pageutils.utils);
    return (
        <div style={{ display: toggleMIW ? 'block' : 'none' }}>
            <div id='MIWBg' onClick={toggleMIWbtn}></div>
            <div id='delMIW'>
                <div id='delMIWpage'>
                    <h2>{userdata.userid} 계정 삭제</h2>
                    <p>계정을 정말로 삭제 하시겠습니까?</p>
                    <p>잃은 데이터는 되돌릴 수 없습니다.</p>
                    <div id='delMIWBtns'>
                        <button onClick={NMAlldelete}>삭제</button>
                        <button onClick={toggleMIWbtn}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoDel;