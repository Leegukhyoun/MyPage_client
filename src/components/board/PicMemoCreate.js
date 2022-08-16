import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pointUser } from '../../module/loginIndex';
import { headerOn } from '../../module/pageutils';
import { getCookie } from '../../util/cookie';
import { API_URL } from '../../config/apiurl';
import PicLeft from './PicLeft';
import { addPicmemAdd, setPicMemInput, setPicMemReset, setPicMemUserid } from '../../module/memoIndex';
import PicMemoCreatePage from './PicMemoCreatePage';

const PicMemoCreate = () => {
    const { data, loading, error } = useSelector(state=>state.loginIndex.user);
    const picmem = useSelector(state=>state.memoIndex.picmem);
    const userid = getCookie('userid');
    const dispatch = useDispatch();
    useEffect(()=>{
        if(userid){
            dispatch(pointUser());
        }else{
            <div id='notCookie'><p>쿠키 없음.</p></div>
        }
    },[dispatch])
    useEffect(()=>{
        dispatch(headerOn());
    },[data])

    const setInput = (e) => {
        dispatch(setPicMemInput(e))
    }
    const setReset = () => {
        dispatch(setPicMemReset())
    }
    const setUserid = (userid) => {
        dispatch(setPicMemUserid(userid))
    }
    const addPic = () => {
        dispatch(addPicmemAdd());
        dispatch(pointUser());
    }

    if(loading) return <div id='loading'><img src={`${API_URL}/upload/3305803.png`} alt=''/></div>
    if(error) return <div>에러 발생</div>
    if(!data) return null;


    return (
        <div className='subinner subindex'>
            <PicLeft user={data[0][0]} data={data}/>
            <PicMemoCreatePage setInput={setInput} setReset={setReset} setUserid={setUserid} addPic={addPic} picmem={picmem}/>
        </div>
    );
};

export default PicMemoCreate;