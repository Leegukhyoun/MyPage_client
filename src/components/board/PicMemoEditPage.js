import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config/apiurl';
import { editPicMemInput, editPicMemo, getPicMemo, setImg, setPicMemInput, setPicMemReset } from '../../module/memoIndex';
import { getCookie } from '../../util/cookie';

const PicMemoEditPage = () => {
    const { data, loading, error } = useSelector(state=>state.memoIndex.getpic);
    const memo = useSelector(state=>state.memoIndex.picmem);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userid = getCookie('userid');
    const id = useLocation();
    const [ imageUrl, setImageUrl ] = useState(null);
    useEffect(()=>{
        if(userid){
            dispatch(getPicMemo(id.pathname));
            const pictitle = data[0].pictitle;
            const picDesc = data[0].picDesc;
            const picImg = data[0].picImg;
            dispatch(editPicMemInput(pictitle, picDesc, picImg));
        }else{
            <div id='notCookie'><p>쿠키 없음.</p></div>
        }
    },[dispatch])
    
    const onChangeImage = (e)=>{
        const { name } = e.target;
        const imageFormData = new FormData();
        imageFormData.append(name,e.target.files[0]);
        axios.post(`${API_URL}/image`, imageFormData, {
            Headers: { 'content-type': 'multipart/form-data' },
          }).then((response) => {
            console.log({ response });
            setImageUrl(response.data.img);
            dispatch(setImg(response.data.img));
          });
    }
    if(loading) return <div id='loading'><img src={`${API_URL}/upload/3305803.png`} alt=''/></div>
    if(error) return <div>에러 발생</div>
    if(!data) return null;
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(editPicMemo(id.pathname));
        dispatch(setPicMemReset());
        navigate(`/picmemodetail/${data[0].id}`);
    }
    const onChange = (e) => {
        dispatch(setPicMemInput(e));
    }
    const cancle = (e) => {
        e.preventDefault();
        dispatch(setPicMemReset());
        navigate(`/picmemodetail/${data[0].id}`);
    }
    return (
        <div className='NMC'>
            <form encType="multipart/form-data" onSubmit={onSubmit}>
                <p className='NMCtitle'>사진 메모 수정</p>
                <p className='NMCmini'>수정을 완료하고 확인을 눌러주세요.</p> 
                <div className='NMCInput picImage'>
                    <input type='file' name='img' id='picImg' onChange={onChangeImage}></input>
                    {imageUrl ?
                        (<div className='picUpload'>
                            <img src={`${API_URL}/upload/${imageUrl}`} alt="" id='imgview' style={{width : 200 + 'px', height : 200 + 'px', border : '1px solid var(--border-color)', borderRadius : 4 + 'px'}} />
                        </div>)
                        :
                        (<div className='picUpload'>
                            <img src={`${API_URL}/upload/${data[0].picImg}`} alt='' style={{width : 200 + 'px', height : 200 + 'px', border : '1px solid var(--border-color)', borderRadius : 4 + 'px'}} />
                        </div>)}
                </div>
                <div className='NMCInput'>
                    <p>제목 : </p>    
                    <input type="text" name='pictitle' onChange={onChange} spellCheck="false" autoComplete='off' defaultValue={data[0].pictitle}/>
                </div>
                <div className='NMCInput' id='picText'>
                    <p>내용 : </p>    
                    <textarea name='picDesc' onChange={onChange} spellCheck="false" autoComplete='off' defaultValue={data[0].picDesc}></textarea>
                </div>
                <div className='NMCBtn'>
                    <button type='onSubmit'>작성</button>
                    <button onClick={cancle}>취소</button>
                </div>
            </form>
        </div>
    );
};

export default PicMemoEditPage;