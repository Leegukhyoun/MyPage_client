import { FaSearch } from 'react-icons/fa';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout, goToLogin } from '../../../module/loginIndex';
import { removeCookie } from '../../../util/cookie';
import { headerOFF } from '../../../module/pageutils';

const MyPage = ({info}) => {
    const navigate = useNavigate();
    const {isLogin} = useSelector(state=>state.loginIndex.login);
    const dispatch = useDispatch();
    const logoutBtn = () => {
        removeCookie('userid');
        removeCookie('pw');
        alert('로그아웃 되었습니다.');
        dispatch(setLogout());
        dispatch(headerOFF());
        dispatch(goToLogin(navigate));
    }
    useEffect(()=>{

    },[isLogin])

    const user = info[0];
    
    return (
        <div id='myPage'>
            <div id='status'>
                <Link to="/mainindex/createpic">
                <div id='imgSize'>
                    <img src={`images/${user.img}`} alt='#' />
                </div>
                </Link>
                <div id='myInfo'>
                    <p>{`${user.name}님`}</p>
                    <p>{`${user.email1}@${user.email2}`}</p>
                </div>
                <button onClick={logoutBtn}>로그아웃</button>
            </div>
            <div id='norSearch'>
                <input type="text" placeholder='일반메모 검색' />
                <div id='norSearchIcon'><FaSearch /></div>
            </div>
            <div id='botBtn'>
                <button>내 정보</button>
                <button>북마크</button>
            </div>
        </div>
    );
};

export default MyPage;