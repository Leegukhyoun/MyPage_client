import React, { useEffect } from 'react';
import NorLeft from './NorLeft';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../../config/apiurl';
import { getCookie } from '../../util/cookie';
import { headerOn } from '../../module/pageutils';
import NorRightList from './NorRightList';
import { setNorMemReset } from '../../module/memoIndex';
import { useNavigate } from 'react-router-dom';

const SearchNorMemo = () => {
    const { data:userdata, loading:userloading, error:usererror } = useSelector(state=>state.loginIndex.user);
    const { data:nordata, loading:norloading, error:norerror } = useSelector(state=>state.memoIndex.getnor);
    const { search } = useSelector(state=>state.memoIndex.normem);
    const userid = getCookie('userid');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(nordata);
    useEffect(()=>{
        if(userid){

        }else{
            <div id='notCookie'><p>쿠키 없음.</p></div>
        }
    },[dispatch])
    useEffect(()=>{
        dispatch(headerOn());
    },[userdata])
    if(userloading) return <div id='loading'><img src={`${API_URL}/upload/3305803.png`} alt=''/></div>
    if(usererror) return <div>에러 발생</div>
    if(!userdata) return null;
    if(norloading) return <div id='loading'><img src={`${API_URL}/upload/3305803.png`} alt=''/></div>
    if(norerror) return <div>에러 발생</div>
    if(!nordata) return null;


    
    const CancleBtn = (e) => {
        e.preventDefault();
        dispatch(setNorMemReset());
        navigate(`/normemo`);
    }

    return (
        <div className='subinner subindex'>
            <NorLeft user={userdata[0][0]} />
            <div className='NMC'>
                <form>
                    <p className='NMCtitle'>{`${search} 검색한 결과`}</p>
                    <p className='NMCmini'></p>
                    <ul id='searchTitle'>
                        <li>제목</li>
                        <li>작성일</li>
                    </ul>
                    <div id='searchList'>
                        {nordata.map(info =>
                            <NorRightList info={info} key={info.id} />
                        )}
                    </div>
                    <div className='NMCBtn'>
                        <button onClick={CancleBtn}>검색 취소</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchNorMemo;