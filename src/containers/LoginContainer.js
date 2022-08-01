import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setLoginInput, getLogin, goToHome } from '../module/loginIndex';
import { useNavigate } from 'react-router-dom';
import FrontWindow from '../components/Front/FrontWindow'

const LoginContainer = () => {

    const loginUser = useSelector(state=>state.loginIndex.loginUser);
    const navigate = useNavigate();
    const onHome = () => {
        dispatch(goToHome(navigate));
    }
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(setLoginInput(e));
    }

    const onSubmit = () => {
        dispatch(getLogin());
            dispatch(getLogin()).then((result) => {
                if(result === "id"){
                    return alert('아이디가 맞지 않습니다.')
                }else if(result === 'pw'){
                    return alert('비밀번호가 맞지 않습니다.')
                } else if(result === "성공"){
                    onHome();
                }
            });
    }

    return (
        <FrontWindow  onHome={onHome} onChange={onChange} onSubmit={onSubmit} loginUser={loginUser}/>
    );
};

export default LoginContainer;