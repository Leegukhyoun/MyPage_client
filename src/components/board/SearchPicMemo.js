import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../../config/apiurl';
import { getCookie } from '../../util/cookie';
import { headerOn } from '../../module/pageutils';
import { setPicMemReset } from '../../module/memoIndex';
import { useNavigate } from 'react-router-dom';
import PicLeft from './PicLeft';
import PicRightList from './PicRightList';

const SearchPicMemo = () => {
    const { data:userdata, loading:userloading, error:usererror } = useSelector(state=>state.loginIndex.user);
    const { data:picdata, loading:picloading, error:picerror } = useSelector(state=>state.memoIndex.getpic);
    const { search } = useSelector(state=>state.memoIndex.picmem);
    const userid = getCookie('userid');
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
    if(usererror) return <div>유저 정보 에러 발생</div>
    if(!userdata) return null;
    if(picloading) return <div id='loading'><img src={`${API_URL}/upload/3305803.png`} alt=''/></div>
    if(picerror) return <div>사진 에러 발생</div>
    if(!picdata) return null;

    const CancleBtn = (e) => {
        e.preventDefault();
        dispatch(setPicMemReset());
        navigate(`/picmemo`);
    }
    return (
        <div className='subinner subindex'>
            <PicLeft user={userdata[0][0]} />
            <div className='NMC'>
                <form>
                    <p className='NMCtitle'>{`${search} 검색한 결과`}</p>
                    <p className='NMCmini'></p>
                    <ul className='picsearch'>
                        <li>사진</li>
                        <li>제목</li>
                        <li>작성일</li>
                    </ul>
                    <div id='searchList'>
                        {picdata.map(info =>
                            <PicRightList info={info} key={info.id} />
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

export default SearchPicMemo;