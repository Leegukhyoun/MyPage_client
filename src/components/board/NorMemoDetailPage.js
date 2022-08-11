import React, {useEffect} from 'react';
import { getCookie } from '../../util/cookie';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getNorMemo } from '../../module/memoIndex';
import { API_URL } from '../../config/apiurl';
import { headerOn, toggleNDW } from '../../module/pageutils';
import { useLocation, Link } from 'react-router-dom';
import moment from 'moment';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { pointUser } from '../../module/loginIndex';
import NorDelWindow from './NorDelWindow';


const NorMemoDetailPage = () => {
    const navigate = useNavigate();
    const { data, loading, error } = useSelector(state=>state.memoIndex.getnor);
    const userid = getCookie('userid');
    const id = useLocation();
    const dispatch = useDispatch();
    useEffect(()=>{
        if(userid){
            dispatch(getNorMemo(id.pathname));
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

    const setCancle = (e) => {
        e.preventDefault();
        navigate("/normemo");
    }
    const NDWBtn = (e) => {
        e.preventDefault();
        dispatch(toggleNDW());
    }

    function NMdelete(e) {
        e.preventDefault();
        axios.delete(`${API_URL}/norDel/${data[0].id}`)
            .then((result) => {
                dispatch(pointUser());
                dispatch(toggleNDW());
                navigate("/normemo");
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <>
        <div className='NMC'>
            <form>
                <p className='NMCtitle'>{data[0].title}</p>
                <p className='NMCmini'>{moment(data[0].nowDate).format('YYYY-MM-DD')}</p>
                <div className='detailView'>
                    <pre className='pre'>{data[0].norDesc}</pre>
                </div>
                <div className='detailBtns'>
                    <Link to={`/normemoedit/${data[0].id}`}>글 수정</Link>
                    <button onClick={NDWBtn}>글 삭제</button>
                    <button onClick={setCancle}>목록</button>
                </div>
            </form>
        </div>
        <NorDelWindow data={data[0]} NMdelete={NMdelete} NDWBtn={NDWBtn}/>
        </>
    );
};

export default NorMemoDetailPage;