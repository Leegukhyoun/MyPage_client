import React from 'react';
import { Link } from 'react-router-dom';
import PicRightList from './PicRightList';

const PicRight = ({data}) => {
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
                    <input name='search' type='text' autocomplete='off' spellcheck="false"/>
                    <button>검색</button>
                </div>
                <Link to="/picmemocreate"><button id='addPicBtn'>글쓰기</button></Link>
            </div>
        </div>
    );
};

export default PicRight;