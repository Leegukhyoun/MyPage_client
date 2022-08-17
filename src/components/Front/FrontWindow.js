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
import { setSignUpInput, setAddr, setImg,setSignup } from '../../module/createUser';

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
        dispatch(setImageUrl('no-image.png'));
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
                    expires.setMinutes(expires.getMinutes()+300);
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
        console.log(createUser);
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

    const [ imageUrl, setImageUrl ] = useState(null);

    const onChangeImage = (e)=>{
        const { name } = e.target;
        const imageFormData = new FormData();
        console.log(name)
        imageFormData.append(name,e.target.files[0]);
        axios.post(`${API_URL}/image`, imageFormData, {
            Headers: { 'content-type': 'multipart/form-data' },
          }).then((response) => {
            console.log({ response });
            setImageUrl(response.data.img);
            dispatch(setImg(response.data.img));
          });
    }

    const onSubmitSign = () => {
        if (createUser.userid === '' || createUser.name === '' || createUser.pw === '' || createUser.pwch === '') {
            alert('필수 항목을 모두 입력해주세요.');
        } else {
            if (createUser.pw === createUser.pwch) {
                dispatch(setSignup());
                dispatch(toggleJW());
                setImageUrl(null);
            } else {
                alert('입력하신 비밀번호와 비밀번호 확인이 일치하지 않습니다.')
            }
        }
    }
    return (
        <div>
            <div style={{ display: openJW ? 'block' : 'none' }}>
                <div id='frontBg' onClick={JWBtn}></div>
                <div id='JoinWindow'>
                    <form onSubmit={onSubmitSign} enctype="multipart/form-data">
                        <div id='JW'>
                            <div id='JWXcircle' onClick={JWBtn}><BsFillXCircleFill /></div>
                            <p id='readMe'>* 필수 입력</p>
                            <h1>회원 가입</h1>
                            <table>
                                <tr>
                                    <td>＊ ID : </td>
                                    <td><input type="text" name='userid' value={createUser.userid} onChange={SignUpInput} placeholder='ID를 입력해주세요.' spellcheck="false" autocomplete='off'/></td>
                                </tr>
                                <tr>
                                    <td>＊ 이름 : </td>
                                    <td><input type="text" name='name' value={createUser.name} onChange={SignUpInput} placeholder='이름을 입력해주세요.' spellcheck="false" autocomplete='off' /></td>
                                </tr>
                                <tr>
                                    <td>＊ 비밀번호 : </td>
                                    <td><input type="password" name='pw' value={createUser.pw} onChange={SignUpInput} placeholder='비밀번호를 입력해주세요.' spellcheck="false" autocomplete='off'/></td>
                                </tr>
                                <tr>
                                    <td>＊ 비밀번호 확인 : </td>
                                    <td><input type="password" name='pwch' value={createUser.pwch} onChange={SignUpInput} placeholder='비밀번호를 다시 입력해주세요.' spellcheck="false" autocomplete='off'/></td>
                                </tr>
                                <tr>
                                    <td>연락처 : </td>
                                    <td><input type="text" name='phone1' value={createUser.phone1} onChange={SignUpInput} spellcheck="false" autocomplete='off'/> - <input type="text" name='phone2' value={createUser.phone2} onChange={SignUpInput} spellcheck="false" autocomplete='off'/> - <input type="text" name='phone3' value={createUser.phone3} onChange={SignUpInput} spellcheck="false" autocomplete='off'/></td>
                                </tr>
                                <tr>
                                    <td>E-mail : </td>
                                    <td><input type="text" name='email1' value={createUser.email1} onChange={SignUpInput} spellcheck="false" autocomplete='off'/> @ <input type="text" name='email2' value={createUser.email2} onChange={SignUpInput} spellcheck="false" autocomplete='off'/></td>
                                </tr>
                                <tr>
                                    <td>주소 : </td>
                                    <td><input type="text" name='addr1' value={createUser.addr1} onChange={SignUpInput} spellcheck="false" autocomplete='off'/> <button onClick={openPostCode} onChange={SignUpInput}>주소 선택</button></td>
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
                                    <td><input type="text" name='addr2' value={createUser.addr2} onChange={SignUpInput} spellcheck="false" autocomplete='off'/></td>
                                </tr>
                                <tr>
                                    <td>프로필 이미지 : </td>
                                    <td>
                                        <input type="file" name='img' onChange={onChangeImage}  width="100px" height="100px"/>
                                        {imageUrl ?        
                                            (<div className='uploadImg'>
                                                <img src={`${API_URL}/upload/${imageUrl}`} alt="" width="100px" height="100px" id='imgview'/>
                                                <button>이미지 선택</button>
                                            </div>)
                                            :
                                            (<div className='uploadImg'>
                                                <img src={`${API_URL}/upload/no-image.png`} alt='' width="50px" height="50px" />
                                                <button>이미지 선택</button>
                                            </div>)}
                                    </td>
                                </tr>
                            </table>
                            <button type='submit'>등록</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id='frontWindow'>
                <h2 id='loginTitle'>회원 로그인</h2>
                <form id='loginForm' onSubmit={onSubmit}>
                    <div id='loginInputs'>
                        <input name='userid' value={loginData.userid} onChange={onChange} placeholder='아이디' autocomplete='off' spellcheck="false"/>
                        <input type="password" name='pw' value={loginData.pw} onChange={onChange} placeholder='비밀번호' autocomplete='off' spellcheck="false"/>
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