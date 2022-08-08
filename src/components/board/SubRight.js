import React, { useEffect } from 'react';
import { getCookie } from '../../util/cookie';
import BookMarkInfo from './BookMarkInfo';
import { useDispatch } from 'react-redux';

const SubRight = ({info, toggleBMADD, BMAddBtn, BMADD, setBMAddInput, setBMAddReset, setBMAddUserid, addBM, setOffBMADD}) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setOffBMADD());
    },[])
    const userid = getCookie('userid');
    const setUserid = (e) => {
        setBMAddInput(e);
        setBMAddUserid(userid);
    }
    const addBMBtn = (e) => {
        e.preventDefault();
        if(BMADD.name === '' && BMADD.url === ''){
            return ;
        }else{
            addBM();
            setBMAddReset();
            toggleBMADD();
        }
    }
    return (
        <div className='subRight'>
            <h1>북마크 관리</h1>
            <div id='BMmanager'>
                <form>
                    <div id='BMAddBtn'>
                        <div id='BMAddInput' style={{ opacity: toggleBMADD ? '1' : '0', pointerEvents: toggleBMADD ? 'auto' : 'none' }}>
                            <p>북마크 이름 : <input name='name' type="text" id="BMinput" value={BMADD.name} onChange={setUserid} spellcheck="false" autocomplete='off'/> URL : <input name="url" type="text" id="BMinput2" value={BMADD.url} onChange={setBMAddInput} spellcheck="false" autocomplete='off' /></p>
                        </div>
                        <button onClick={BMAddBtn}>등록</button>
                        <button id='submitBM' onClick={addBMBtn} style={{ display: toggleBMADD ? 'block' : 'none' }}>완료</button>
                    </div>
                </form>
                <ul>
                    {info[7].map(info =>
                            <BookMarkInfo info={info} key={info.id}/>
                        )}
                </ul>
            </div>
        </div>
    );
};

export default SubRight;