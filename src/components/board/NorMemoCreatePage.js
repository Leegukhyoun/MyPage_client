import React from 'react';
import { getCookie } from '../../util/cookie';
import {useNavigate} from 'react-router-dom';

const NorMemoCreatePage = ({setInput, setReset, setUserid, addNor, normem}) => {
    const navigate = useNavigate();
    const userid = getCookie('userid');

    const setTitle = (e) => {
        setInput(e);
        setUserid(userid);
    }
    const setCancle = (e) => {
        e.preventDefault();
        setReset();
        navigate("/normemo");
    }
    const setNorMemo = (e) => {
        e.preventDefault();
        addNor();
        navigate("/normemo");
    }

    return (
        <div className='NMC'>
            <form onSubmit={setNorMemo}>
                <p className='NMCtitle'>일반 메모 작성</p>
                <p className='NMCmini'>사소한 일, 장 볼 것, 잊기 싫은 것 모두 자유롭게 작성 해주세요.</p> 
                <div className='NMCInput'>
                    <p>제목 : </p>    
                    <input type="text" name='title' value={normem.title} onChange={setTitle} spellcheck="false" autocomplete='off'/>
                </div>
                <div className='NMCInput' id='NMCtext'>
                    <p>내용 : </p>    
                    <textarea name='norDesc' value={normem.norDesc} onChange={setInput} spellcheck="false" autocomplete='off'></textarea>
                </div>
                <div className='NMCBtn'>
                    <button type='onSubmit'>작성</button>
                    <button onClick={setCancle}>취소</button>
                </div>
            </form>
        </div>
    );
};

export default NorMemoCreatePage;