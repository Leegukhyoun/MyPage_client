import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pointUser } from '../../module/loginIndex';
import { headerOn } from '../../module/pageutils';
import { getCookie } from '../../util/cookie';
import { API_URL } from '../../config/apiurl';
import PhoneLeft from './PhoneLeft';
import PhoneMemo from './PhoneMemo';

const PhoneMemoContainer = () => {
    const { data, loading, error } = useSelector(state=>state.loginIndex.user);
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



    if(loading) return <div id='loading'><img src={`${API_URL}/upload/3305803.png`} alt=''/></div>
    if(error) return <div>에러 발생</div>
    if(!data) return null;
    return (
        <div className='subinner subindex'>
            <PhoneLeft user={data[0][0]} />
            <PhoneMemo data={data[10]}/>
        </div>
    );
};

export default PhoneMemoContainer;