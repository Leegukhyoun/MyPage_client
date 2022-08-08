import React, { useEffect } from 'react';
import BookMarkManager from './BookMarkManager';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../../util/cookie';
import { API_URL } from '../../config/apiurl';
import { pointUser } from '../../module/loginIndex';
import { headerOn } from '../../module/pageutils';
import { setOnBMADD, setOffBMADD } from '../../module/pageutils';
import { setBMAddInput, setBMAddReset, setBMAddUserid, addBmAdd } from '../../module/memoIndex';

const BookMarkContainer = () => {
    const { data, loading, error } = useSelector(state=>state.loginIndex.user);
    const { toggleBMADD } = useSelector(state=>state.pageutils.utils);
    const BMADD = useSelector(state=>state.memoIndex.bmadd);
    const dispatch = useDispatch();
    const userid = getCookie('userid');
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
    const BMAddBtn = (e) => {
        e.preventDefault();
        dispatch(setOnBMADD())
    }
    const setInput = (e) => {
        dispatch(setBMAddInput(e))
    }
    const setReset = () => {
        dispatch(setBMAddReset())
    }
    const setUserid = (userid) => {
        dispatch(setBMAddUserid(userid))
    }
    const addBM = () => {
        dispatch(addBmAdd());
        dispatch(pointUser());
    }
    if(loading) return <div id='loading'><img src={`${API_URL}/upload/3305803.png`} alt=''/></div>
    if(error) return <div>에러 발생</div>
    if(!data) return null;
    return (
        <BookMarkManager info={data[0]} data={data} toggleBMADD={toggleBMADD} BMAddBtn={BMAddBtn} BMADD={BMADD} setBMAddInput={setInput} setBMAddReset={setReset} setBMAddUserid={setUserid} addBM={addBM} setOffBMADD={setOffBMADD}/>
    );
};

export default BookMarkContainer;