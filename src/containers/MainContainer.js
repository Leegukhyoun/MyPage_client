import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainIndex from '../components/Main/MainIndex';
import { pointUser } from '../module/loginIndex';
import { headerOn } from '../module/pageutils';

const MainContainer = () => {
    const { data, loading, error } = useSelector(state=>state.loginIndex.user);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(pointUser());
    },[dispatch])
    useEffect(()=>{
        dispatch(headerOn());
    },[])
    if(loading) return <div>로딩중.</div>
    if(error) return <div>에러 발생</div>
    if(!data) return null;
    return (
        <MainIndex info={data}/>
    );
};

export default MainContainer;