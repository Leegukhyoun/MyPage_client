import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainIndex from '../components/Main/MainIndex';
import { API_URL } from '../config/apiurl';
import { pointUser } from '../module/loginIndex';
import { headerOn, onBMW, closeBMW } from '../module/pageutils';
import { getCookie } from '../util/cookie';


const MainContainer = () => {
    const { data, loading, error } = useSelector(state=>state.loginIndex.user);
    const { openBMW } = useSelector(state=>state.pageutils.utils);
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
    const onBMWOn = () => {
        dispatch(onBMW());
    }
    const onBMWOff = () => {
        dispatch(closeBMW());
    }
    if(loading) return <div id='loading'><img src={`${API_URL}/upload/3305803.png`} alt=''/></div>
    if(error) return <div>에러 발생</div>
    if(!data) return null;
    return (
        <MainIndex info={data} openBMW={openBMW} onBMWOn={onBMWOn} onBMWOff={onBMWOff}/>
    );
};

export default MainContainer;