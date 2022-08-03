import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, goToHome } from '../../module/loginIndex';
import {API_URL} from '../../config/apiurl';
import {setCookie} from '../../util/cookie';
import { BsFillXCircleFill } from 'react-icons/bs';
import PopupPostCode from './AddressSearch/PopupPostCode';
import PopupDom from './AddressSearch/PopupDom';
import { toggleJW } from '../../module/pageutils';
import { setSignUpInput, setAddr } from '../../module/createUser';

const FrontWindow = () => {
    const { openJW } = useSelector(state=>state.pageutils.utils);
    const createUser = useSelector(state=>state.createUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ loginData, setLoginData ] = useState({
        userid : "",
        pw : ""
    })
    const onChange = (e) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]:value
        })
    }
    const JWBtn = () => {
        dispatch(toggleJW());
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(loginData.userid === '' || loginData.pw === ''){
            alert('ID와 비밀번호를 입력해주세요.');
        }else{
            axios.post(`${API_URL}/login`, loginData)
            .then(result=>{
                //로그인이 되었을 때
                let {userid, pw} = result.data;
                if(userid !== null && userid !== '' && userid !== undefined){
                    alert('로그인 되었습니다.');
                    //현재시간 객체 생성
                    let expires = new Date();
                    //60분 더한 값으로 변경
                    expires.setMinutes(expires.getMinutes()+30);
                    setCookie('userid', `${userid}`, {path : `/`, expires});
                    setCookie('pw', `${pw}`, {path : `/`, expires});
                    dispatch(setLogin());
                    dispatch(goToHome(navigate));
                } else {
                    alert('ID 또는 비밀번호를 확인해주세요.');
                    return
                }
            })
            .catch(e=>{
                alert('ID와 비밀번호를 확인해주세요.');
            })
        }
    }
    const onAddData = (data) => {
        console.log(data);
        const postAdd = data.address;
        console.log(postAdd);
        dispatch(setAddr(postAdd));
    }

    const SignUpInput = (e) => {
        dispatch(setSignUpInput(e));
    }

    const [ isPopupOpen, setIsPopupOpen ] = useState(false);
    
    
    const openPostCode = (e) => {
        e.preventDefault();
        setIsPopupOpen(true);
    }
    
    const closePostCode = (e) => {
        e.preventDefault();
        setIsPopupOpen(false);
    }
    return (
        <div>
            <div style={{ display: openJW ? 'block' : 'none' }}>
                <div id='frontBg' onClick={JWBtn}></div>
                <div id='JoinWindow'>
                    <form>
                        <div id='JW'>
                            <div id='JWXcircle' onClick={JWBtn}><BsFillXCircleFill /></div>
                            <p id='readMe'>* 필수 입력</p>
                            <h1>회원 가입</h1>
                            <table>
                                <tr>
                                    <td>＊ ID : </td>
                                    <td><input type="text" name='userid' value={createUser.userid} onChange={SignUpInput} placeholder='ID를 입력해주세요.' /></td>
                                </tr>
                                <tr>
                                    <td>＊ 비밀번호 : </td>
                                    <td><input type="text" name='pw' value={createUser.pw} onChange={SignUpInput} placeholder='비밀번호를 입력해주세요.' /></td>
                                </tr>
                                <tr>
                                    <td>＊ 비밀번호 확인 : </td>
                                    <td><input type="text" name='pwch' onChange={SignUpInput} placeholder='비밀번호를 다시 입력해주세요.' /></td>
                                </tr>
                                <tr>
                                    <td>연락처 : </td>
                                    <td><input type="text" name='phone1' value={createUser.phone1} onChange={SignUpInput}/> - <input type="text" name='phone2' value={createUser.phone2} onChange={SignUpInput}/> - <input type="text" name='phone3' value={createUser.phone3} onChange={SignUpInput}/></td>
                                </tr>
                                <tr>
                                    <td>E-mail : </td>
                                    <td><input type="text" name='email1' value={createUser.email1} onChange={SignUpInput}/> @ <input type="text" name='email2' value={createUser.email2} onChange={SignUpInput}/></td>
                                </tr>
                                <tr>
                                    <td>주소 : </td>
                                    <td><input type="text" name='addr1' value={createUser.addr1} onChange={SignUpInput}/> <button onClick={openPostCode} onChange={SignUpInput}>주소 선택</button></td>
                                    <div id="popupDom">
                                        {isPopupOpen && (
                                            <PopupDom>
                                                <PopupPostCode onClose={closePostCode} onAddData={onAddData} />
                                            </PopupDom>
                                        )}
                                    </div>
                                </tr>
                                <tr>
                                    <td>상세 주소 :</td>
                                    <td><input type="text" name='addr2' value={createUser.addr2} onChange={SignUpInput}/></td>
                                </tr>
                                <tr>
                                    <td>프로필 이미지 : </td>
                                    <td><input type="file" name='img'/></td>
                                </tr>
                            </table>
                            <button>등록</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id='frontWindow'>
                <h2 id='loginTitle'>회원 로그인</h2>
                <form id='loginForm' onSubmit={onSubmit}>
                    <div id='loginInputs'>
                        <input name='userid' value={loginData.userid} onChange={onChange} placeholder='아이디' />
                        <input name='pw' value={loginData.pw} onChange={onChange} placeholder='비밀번호' />
                    </div>
                    <div id='loginShadow'>
                        <button>로그인</button>
                    </div>
                </form>
                <div id='loginMenus'>
                    <p onClick={JWBtn}>회원가입</p>
                    <p>비밀번호 찾기</p>
                </div>
            </div>
        </div>
    );
};

export default FrontWindow;