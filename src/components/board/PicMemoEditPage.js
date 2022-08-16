import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useLocation, useNavigate } from 'react-router-dom';
import { headerOn } from '../../module/pageutils';
import { getCookie } from '../../util/cookie';
import { getNorMemo } from '../../module/memoIndex';
import { API_URL } from '../../config/apiurl';

const PicMemoEditPage = () => {
    const { data, loading, error } = useSelector(state=>state.memoIndex.getpic);
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

    if(loading) return <div id='loading'><img src={`${API_URL}/upload/3305803.png`} alt=''/></div>
    if(error) return <div>에러 발생</div>
    if(!data) return null;


    return (
        <div className='NMC'>
        <form onSubmit={setPicMemo} enctype="multipart/form-data">
            <p className='NMCtitle'>사진 메모 작성</p>
            <p className='NMCmini'>기록 하고싶은 사진을 업로드 해주세요.</p> 
            <div className='NMCInput picImage'>
                <input type='file' name='img' id='picImg' onChange={onChangeImage}></input>
                {imageUrl ?
                    (<div className='picUpload'>
                        <img src={`${API_URL}/upload/${imageUrl}`} alt="" id='imgview' style={{width : 200 + 'px', height : 200 + 'px', border : '1px solid var(--border-color)', borderRadius : 4 + 'px'}} />
                    </div>)
                    :
                    (<div className='picUpload'>
                        <img src={`${API_URL}/upload/no-image.png`} alt='' style={{width : 200 + 'px', height : 200 + 'px', border : '1px solid var(--border-color)', borderRadius : 4 + 'px'}} />
                    </div>)}
            </div>
            <div className='NMCInput'>
                <p>제목 : </p>    
                <input type="text" name='pictitle' value={picmem.pictitle} onChange={setTitle} spellcheck="false" autocomplete='off'/>
            </div>
            <div className='NMCInput' id='picText'>
                <p>내용 : </p>    
                <textarea name='picDesc' value={picmem.picDesc} onChange={setInput} spellcheck="false" autocomplete='off'></textarea>
            </div>
            <div className='NMCBtn'>
                <button type='onSubmit'>수정</button>
                <button onClick={setCancle}>취소</button>
            </div>
        </form>
    </div>
    );
};

export default PicMemoEditPage;