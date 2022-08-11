import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pointUser } from '../../module/loginIndex';
import { headerOn } from '../../module/pageutils';
import { getCookie } from '../../util/cookie';
import { API_URL } from '../../config/apiurl';
import NorLeft from './NorLeft';
import NorMemoCreatePage from './NorMemoCreatePage';
import { setNorMemInput, setNorMemReset, setNorMemUserid, addNormemAdd } from '../../module/memoIndex';

const NorMemoCreate = () => {
    const { data, loading, error } = useSelector(state=>state.loginIndex.user);
    const normem = useSelector(state=>state.memoIndex.normem);
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
        dispatch(setNorMemInput(e))
    }
    const setReset = () => {
        dispatch(setNorMemReset())
    }
    const setUserid = (userid) => {
        dispatch(setNorMemUserid(userid))
    }
    const addNor = () => {
        dispatch(addNormemAdd());
        dispatch(pointUser());
    }

    if(loading) return <div id='loading'><img src={`${API_URL}/upload/3305803.png`} alt=''/></div>
    if(error) return <div>에러 발생</div>
    if(!data) return null;
    return (
        <div className='subinner subindex'>
            <NorLeft user={data[0][0]} data={data}/>
            <NorMemoCreatePage setInput={setInput} setReset={setReset} setUserid={setUserid} addNor={addNor} normem={normem}/>
        </div>
    );
};

export default NorMemoCreate;