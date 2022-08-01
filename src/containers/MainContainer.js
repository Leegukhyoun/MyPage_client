import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainIndex from '../components/Main/MainIndex';
import { pointUser } from '../module/loginIndex';
import { searchNorMemo } from '../module/memoIndex';
import { headerOn } from '../module/pageutils';

const MainContainer = () => {
    const { data, loading, error } = useSelector(state=>state.loginIndex.user);
    const { data:rightData, loading:rightLoading, error:rightError } = useSelector(state=>state.memoIndex.load);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(pointUser());
        dispatch(searchNorMemo());
    },[dispatch])
    useEffect(()=>{
        dispatch(headerOn());
    },[])
    if(loading || rightLoading) return <div>로딩중.</div>
    if(error || rightError) return <div>에러 발생</div>
    if(!data || !rightData) return null;
    return (
        <MainIndex info={data} right={rightData}/>
    );
};

export default MainContainer;