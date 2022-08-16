import React, {useEffect} from 'react';
import { getCookie } from '../../util/cookie';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getPicMemo } from '../../module/memoIndex';
import { API_URL } from '../../config/apiurl';
import { headerOn, togglePDW } from '../../module/pageutils';
import { useLocation, Link } from 'react-router-dom';
import moment from 'moment';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { pointUser } from '../../module/loginIndex';
import PicDelWindow from './PicDelWindow';

const PicMemoDetailPage = () => {
    const navigate = useNavigate();
    const { data, loading, error } = useSelector(state=>state.memoIndex.getpic);
    const userid = getCookie('userid');
    const id = useLocation();
    const dispatch = useDispatch();
    useEffect(()=>{
        if(userid){
            dispatch(getPicMemo(id.pathname));
        }else{
            <div id='notCookie'><p>쿠키 없음.</p></div>
        }
    },[dispatch])
    useEffect(()=>{
        dispatch(headerOn());
    },[data])
    if(loading) return <div id='loading'><img src={`${API_URL}/upload/3305803.png`} alt=''/></div>
    if(error) return <div>에러 발생</div>
    if(!data) return null;
    const userdata = data[0];

    const setCancle = (e) => {
        e.preventDefault();
        navigate("/picmemo");
    }
    const PDWBtn = (e) => {
        e.preventDefault();
        dispatch(togglePDW());
    }

    function PMdelete(e) {
        e.preventDefault();
        axios.delete(`${API_URL}/picDel/${data[0].id}`)
            .then((result) => {
                dispatch(pointUser());
                dispatch(togglePDW());
                navigate("/picmemo");
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <>
            <div className='NMC'>
                <form>
                    <p className='NMCtitle'>{userdata.pictitle}</p>
                    <p className='NMCmini'>{moment(userdata.nowDate).format('YYYY-MM-DD')}</p>
                    <div id='datailImg'>
                        <img src={`${API_URL}/upload/${userdata.picImg}`} alt='' />
                    </div>
                    <div className='detailView' id='imgText'>
                        <pre className='pre'>{userdata.picDesc}</pre>
                    </div>
                    <div className='detailBtns'>
                        <Link to={`/picmemoedit/${userdata.id}`}>글 수정</Link>
                        <button onClick={PDWBtn}>글 삭제</button>
                        <button onClick={setCancle}>목록</button>
                    </div>
                </form>
            </div>
            <PicDelWindow data={data[0]} PMdelete={PMdelete} PDWBtn={PDWBtn}/>
        </>
    );
};

export default PicMemoDetailPage;