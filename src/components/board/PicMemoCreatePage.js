import React, { useEffect, useState } from 'react';
import { getCookie } from '../../util/cookie';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../config/apiurl';
import { useDispatch } from 'react-redux';
import { setImg } from '../../module/memoIndex';

const PicMemoCreatePage = ({setInput, setReset, setUserid, addPic, picmem}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userid = getCookie('userid');
    const [ imageUrl, setImageUrl ] = useState(null);

    useEffect(()=>{
        setReset();
    },[])
    const setTitle = (e) => {
        setInput(e);
        setUserid(userid);
    }
    const setCancle = (e) => {
        e.preventDefault();
        setReset();
        navigate("/picmemo");
    }
    const setPicMemo = (e) => {
        e.preventDefault();
        if(imageUrl){
            addPic();
            navigate("/picmemo");
        } else {
            alert('사진을 등록해주세요.');
        }
    }

   

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
            setUserid(userid);
          });
    }

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
                    <input type="text" name='pictitle' value={picmem.pictitle} onChange={setTitle} spellCheck="false" autoComplete='off'/>
                </div>
                <div className='NMCInput' id='picText'>
                    <p>내용 : </p>    
                    <textarea name='picDesc' value={picmem.picDesc} onChange={setInput} spellCheck="false" autoComplete='off'></textarea>
                </div>
                <div className='NMCBtn'>
                    <button type='onSubmit'>작성</button>
                    <button onClick={setCancle}>취소</button>
                </div>
            </form>
        </div>
    );
};

export default PicMemoCreatePage;