import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../config/apiurl';
import { headerOFF, headerOn, toggleMIWFn, toggleNorAll, togglePicAll } from '../../module/pageutils';
import InfoDel from './InfoDel';
import MyInfoLeft from './MyInfoLeft';
import {useNavigate, Link} from 'react-router-dom';
import { getCookie } from '../../util/cookie';
import { pointUser } from '../../module/loginIndex';
import NorAlldel from './NorAlldel';
import PicAlldel from './PicAlldel';
const MyInfo = () => {
    const { data, loading, error } = useSelector(state=>state.loginIndex.user);
    const userid = getCookie('userid');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if(userid){
            dispatch(pointUser());
            dispatch(headerOn());
        }else{
            <div id='notCookie'><p>쿠키 없음.</p></div>
        }
    },[dispatch])
    if(loading) return <div id='loading'><img src={`${API_URL}/upload/3305803.png`} alt=''/></div>
    if(error) return <div>에러 발생</div>
    if(!data) return null;

    const userdata = data[0][0];
    const norlength = data[1].length;
    const piclength = data[3].length;

    function NMAlldelete(e) {
        e.preventDefault();
        axios.delete(`${API_URL}/norAllDel/${data[0][0].userid}`)
            .then((result) => {
                navigate("/");
                dispatch(toggleMIWFn());
                dispatch(headerOFF());
            })
            .catch((e) => {
                console.log(e)
            })
    }
    function NorAlldelete(e) {
        e.preventDefault();
        axios.delete(`${API_URL}/AllNorDel/${data[0][0].userid}`)
            .then((result) => {
                dispatch(pointUser());
                dispatch(toggleNorAll());
            })
            .catch((e) => {
                console.log(e)
            })
    }
    function PicAlldelete(e) {
        e.preventDefault();
        axios.delete(`${API_URL}/AllPicDel/${data[0][0].userid}`)
            .then((result) => {
                dispatch(pointUser());
                dispatch(togglePicAll());
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const toggleMIWbtn = (e) => {
        e.preventDefault();
        dispatch(toggleMIWFn());
    }
    const toggleNorAllbtn = (e) => {
        e.preventDefault();
        dispatch(toggleNorAll());
    }
    const togglePicAllbtn = (e) => {
        e.preventDefault();
        dispatch(togglePicAll());
    }
    return (
        <div className='subinner subindex'>
            <MyInfoLeft user={userdata} />
            <div className='NMC'>
                <form>
                    <p className='NMCtitle'>내 정보</p>
                    <p className='NMCmini'></p>
                    <div id='myInfoMenu'>
                        <div className='MIW'>
                            <p>기본 정보</p>
                            <div className='infoCard'>
                                <div id='imgInfo'>
                                    <div id='imgCover'>
                                        <img src={`${API_URL}/upload/${userdata.img}`} />
                                    </div>
                                    <p>{userdata.name}</p>
                                </div>
                                <div id='nametag'>
                                    <div><p className='infoTitle'>회원번호</p>{userdata.id}</div>
                                    <div><p className='infoTitle'>ID</p>{userdata.userid}</div>
                                    <div><p className='infoTitle'>전화번호</p>{userdata.phone1}-{userdata.phone2}-{userdata.phone3}</div>
                                    <div><p className='infoTitle'>E-mail</p>{userdata.email1}@{userdata.email2}</div>
                                </div>
                                <div id='MIWBtn'>
                                    {/* <Link to="/infoedit"><button>정보 수정</button></Link> */}
                                    <button onClick={toggleMIWbtn}>회원 탈퇴</button>
                                </div>
                            </div>
                        </div>
                        <div className='MIW'>
                            <ul id='MIWUL'>
                                <li>
                                    <p>나의 일반메모</p>
                                    <h6>{`총 ${norlength}건`}</h6>
                                    <button onClick={toggleNorAllbtn}>초기화</button>
                                </li>
                                <li>
                                    <p>나의 사진메모</p>
                                    <h6>{`총 ${piclength}건`}</h6>
                                    <button onClick={togglePicAllbtn}>초기화</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
            <InfoDel userdata={userdata} toggleMIWbtn={toggleMIWbtn} NMAlldelete={NMAlldelete}/>
            <NorAlldel toggleNorAllbtn={toggleNorAllbtn} NorAlldelete={NorAlldelete}/>
            <PicAlldel togglePicAllbtn={togglePicAllbtn} PicAlldelete={PicAlldelete}/>
        </div>
    );
};

export default MyInfo;