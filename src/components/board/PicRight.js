import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { searchPic, setPicMemInput } from '../../module/memoIndex';
import { getCookie } from '../../util/cookie';
import PicRightList from './PicRightList';

const PicRight = ({data}) => {
    const { search } = useSelector(state=>state.memoIndex.picmem);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userid = getCookie('userid');
    const onClick = (e) => {
        e.preventDefault();
        if(!search){
            alert('검색어를 입력해주세요.')
        }else{
            dispatch(searchPic(search));
            navigate(`/searchpic/${userid}/${search}`);
        }
    }
    const onChange = (e) => {
        dispatch(setPicMemInput(e));
    }
    const onKeyPress = (e) => {
        console.log(e);
        if(e.key == 'Enter'){
            onClick(e);
        }
    }
    return (
        <div className='subRight' id='picListPage'>
            <ul id='picTitle'>
                <li>사진</li>
                <li>제목</li>
                <li>작성일</li>
            </ul>
            <div id='rightPicList'>
            {data[3].map(info =>
                <PicRightList info={info} key={info.id} />
            )}
            </div>
            <div>
                <div id='picSearchBar'>
                    <input name='search' type='text' autocomplete='off' spellcheck="false" onChange={onChange} onKeyPress={onKeyPress}/>
                    <button onClick={onClick}>검색</button>
                </div>
                <Link to="/picmemocreate"><button id='addPicBtn'>글쓰기</button></Link>
            </div>
        </div>
    );
};

export default PicRight;