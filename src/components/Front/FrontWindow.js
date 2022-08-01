import React from 'react';
import {Link} from 'react-router-dom'
const FrontWindow = ({onHome, onChange, onSubmit, loginUser}) => {

    const onSubmitch = (e) => {
        e.preventDefault();
        if(loginUser.userId !== "" && loginUser.userPw !== ""){
            onSubmit();
        }
    }


    return (
        <div id='frontWindow'>
            <h2 id='loginTitle'>회원 로그인</h2>
            <form id='loginForm' onSubmit={onSubmitch}>
                <div id='loginInputs'>
                    <input name='userId' value={loginUser.userid} placeholder='아이디' onChange={onChange}/>
                    <input name='userPw' value={loginUser.pw} placeholder='비밀번호' onChange={onChange}/>
                </div>
                <div id='loginShadow'>
                    <button type='submit'>로그인</button>
                    {/* <Link to="/mainindex"><button>로그인</button></Link> */}
                </div> 
            </form>
            <div id='loginMenus'>
                <p>회원가입</p>
                <p>비밀번호 찾기</p>
            </div>
        </div>
    );
};

export default FrontWindow;