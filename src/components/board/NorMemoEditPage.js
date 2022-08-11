import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useLocation, useNavigate } from 'react-router-dom';
import { headerOn } from '../../module/pageutils';
import { getCookie } from '../../util/cookie';
import { getNorMemo } from '../../module/memoIndex';
import { API_URL } from '../../config/apiurl';
import { setNorMemInput, setNorMemReset, editNorMemo, editNorMemInput } from '../../module/memoIndex';

const NorMemoEditPage = () => {
    const { data, loading, error } = useSelector(state=>state.memoIndex.getnor);
    const memo = useSelector(state=>state.memoIndex.normem);
    const userid = getCookie('userid');
    const id = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if(userid){
            dispatch(getNorMemo(id.pathname));
            const title = data[0].title;
            const norDesc = data[0].norDesc;
            dispatch(editNorMemInput(title, norDesc));
        }else{
            <div id='notCookie'><p>쿠키 없음.</p></div>
        }
    },[dispatch])
    useEffect(()=>{
        dispatch(headerOn());
    },[data])

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(editNorMemo(id.pathname));
        dispatch(setNorMemReset());
        navigate(`/normemodetail/${data[0].id}`);
    }
    const onChange = (e) => {
        dispatch(setNorMemInput(e));
    }
    const cancle = (e) => {
        e.preventDefault();
        navigate(`/normemodetail/${data[0].id}`);
    }
    if(loading) return <div id='loading'><img src={`${API_URL}/upload/3305803.png`} alt=''/></div>
    if(error) return <div>에러 발생</div>
    if(!data) return null;
    return (
        <div className='NMC'>
            <form>
                <p className='NMCtitle'>일반 메모 수정</p>
                <p className='NMCmini'>수정을 완료하고 확인을 눌러주세요.</p> 
                <div className='NMCInput'>
                    <p>제목 : </p>    
                    <input type="text" name='title' spellcheck="false" autocomplete='off' onChange={onChange} defaultValue={data[0].title}/>
                </div>
                <div className='NMCInput' id='NMCtext'>
                    <p>내용 : </p>    
                    <textarea name='norDesc' spellcheck="false" autocomplete='off' onChange={onChange} defaultValue={data[0].norDesc}></textarea>
                </div>
                <div className='NMCBtn'>
                    <button onClick={onSubmit}>수정</button>
                    <button onClick={cancle}>취소</button>
                </div>
            </form>
        </div>
    );
};

export default NorMemoEditPage;