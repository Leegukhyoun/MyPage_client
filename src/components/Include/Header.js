import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout, goToLogin } from '../../module/loginIndex';
import { removeCookie } from '../../util/cookie';
import { headerOFF, fixedOff } from '../../module/pageutils';

const Header = () => {
    const navigate = useNavigate();
    const { headerToggle } = useSelector(state=>state.pageutils.utils);
    const {isLogin} = useSelector(state=>state.loginIndex.login);
    const dispatch = useDispatch();
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
    return (
        <div id='header' style={{display : headerToggle ? 'block' : 'none'}}>
            <div className='inner'>
                <div id='innerHeader'>
                    <Link to="/mainindex"><h1 id='title'>My Diary</h1></Link>
                    <ul>
                        <Link to="/bookmark"><li>북마크 관리</li></Link>
                        <Link to="/callnumber"><li>전화번호부</li></Link>
                        <li onClick={logoutBtn}>로그아웃</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;