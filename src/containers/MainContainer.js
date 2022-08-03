import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainIndex from '../components/Main/MainIndex';
import { pointUser } from '../module/loginIndex';
import { headerOn, onBMW, closeBMW } from '../module/pageutils';

const MainContainer = () => {
    const { data, loading, error } = useSelector(state=>state.loginIndex.user);
    const { openBMW } = useSelector(state=>state.pageutils.utils);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(pointUser());
    },[dispatch])
    useEffect(()=>{
        dispatch(headerOn());
    },[])
    const onBMWOn = () => {
        dispatch(onBMW());
    }
    const onBMWOff = () => {
        dispatch(closeBMW());
    }
    if(loading) return <div>로딩중.</div>
    if(error) return <div>에러 발생</div>
    if(!data) return null;
    return (
        <MainIndex info={data} openBMW={openBMW} onBMWOn={onBMWOn} onBMWOff={onBMWOff}/>
    );
};

export default MainContainer;