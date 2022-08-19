import { FaSearch } from 'react-icons/fa';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout, goToLogin } from '../../../module/loginIndex';
import { getCookie, removeCookie } from '../../../util/cookie';
import { headerOFF } from '../../../module/pageutils';
import { API_URL } from '../../../config/apiurl';
import { toggleBM, setToggleMoreBM, fixedOff } from '../../../module/pageutils';
import { searchNor, setNorMemInput } from '../../../module/memoIndex';

const MyPage = ({info}) => {
    const navigate = useNavigate();
    const {isLogin} = useSelector(state=>state.loginIndex.login);
    const {toggleMoreBM} = useSelector(state=>state.pageutils.utils);
    const { search } = useSelector(state=>state.memoIndex.normem);
    const userid = getCookie('userid');
    const dispatch = useDispatch();
    const BMtoggle = () => {
        if(toggleMoreBM){
            dispatch(toggleBM());
            onMoreBtn();
        } else {
            dispatch(toggleBM());
        }
    }
    const onMoreBtn = () => {
        dispatch(setToggleMoreBM());
    }
    const logoutBtn = () => {
        removeCookie('userid');
        removeCookie('pw');
        alert('로그아웃 되었습니다.');
        dispatch(setLogout());
        dispatch(headerOFF());
        dispatch(fixedOff());
        dispatch(goToLogin(navigate));
    }
    useEffect(()=>{

    },[isLogin])

    const user = info[0];
    
    const myInfo = (e) => {
        e.preventDefault();
        navigate("/myinfo");
    }

    const onClick = (e) => {
        e.preventDefault();
        dispatch(searchNor(search));
        navigate(`/searchnor/${userid}/${search}`);
    }
    const onChange = (e) => {
        dispatch(setNorMemInput(e));
    }
    const onKeyPress = (e) => {
        console.log(e);
        if(e.key == 'Enter'){
            onClick(e);
        }
    }
    return (
        <div id='myPage'>
            <div id='status'>
                <div id='imgSize'>
                    <img src={`${API_URL}/upload/${user.img}`} alt='#' />
                </div>
                <div id='myInfo'>
                    <p>{`${user.name}님`}</p>
                    <p>{`${user.email1}@${user.email2}`}</p>
                </div>
                <button onClick={logoutBtn}>로그아웃</button>
            </div>
            <div id='norSearch'>
                <input name='search' type="text" placeholder='일반메모 검색' onChange={onChange} value={search} onKeyPress={onKeyPress} autoComplete='off' spellCheck="false"/>
                <div id='norSearchIcon' onClick={onClick}><FaSearch /></div>
            </div>
            <div id='botBtn'>
                <button onClick={myInfo}>내 정보</button>
                <button onClick={BMtoggle}>북마크</button>
            </div>
        </div>
    );
};

export default MyPage;