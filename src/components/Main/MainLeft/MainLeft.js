import React, { useEffect } from 'react';
import BookMark from './BookMark';
import MyPage from './MyPage';
import { useSelector, useDispatch } from 'react-redux';
import searchUser from '../../../module/loginIndex'

const MainLeft = () => {
    const { data, loading, error } = useSelector(state=>state.loginIndex.UserInfo);
    console.log(data);
    console.log(loading);
    console.log(error)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(searchUser());
    },[dispatch])
    if(loading) return <div>로딩중.</div>
    if(error) return <div>에러 발생</div>
    if(!data) return null;

    return (
        <div id='mainleft'>
            <MyPage/>
            <BookMark/>
        </div>
    );
};

export default MainLeft;