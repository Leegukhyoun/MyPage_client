import React from 'react';
import NorRightList from './NorRightList';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchNor, setNorMemInput } from '../../module/memoIndex';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../util/cookie';


const NorRight = ({data}) => {
    const { search } = useSelector(state=>state.memoIndex.normem);
    const userid = getCookie('userid');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onClick = (e) => {
        e.preventDefault();
       if(!search){
        alert('검색어를 입력해주세요.')
       } else {
        dispatch(searchNor(search));
        navigate(`/searchnor/${userid}/${search}`);
       }
    }
    const onChange = (e) => {
        dispatch(setNorMemInput(e));
    }
    const onKeyPress = (e) => {
        console.log(e);
        if(e.key == 'Enter'){
            onClick(e);
        }
    }
    return (
        <div className='subRight' id='norListPage'>
            <ul id='norTitle'>
                <li>제목</li>
                <li>작성일</li>
            </ul>
            <div id='rightNorList'>
            {data[1].map(info =>
                <NorRightList info={info} key={info.id} />
            )}
            </div>
            <div>
                <div id='norSearchBar'>
                    <input name='search' type='text' onChange={onChange} value={search} onKeyPress={onKeyPress} autoComplete='off' spellCheck="false"/>
                    <button onClick={onClick}>검색</button>
                </div>
                <Link to="/normemocreate"><button id='addNorBtn'>글쓰기</button></Link>
            </div>
        </div>
    );
};

export default NorRight;