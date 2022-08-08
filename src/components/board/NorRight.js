import React from 'react';
import NorRightList from './NorRightList';
import { Link } from 'react-router-dom';

const NorRight = ({data}) => {
    return (
        <div className='subRight' id='norListPage'>
            <ul id='norTitle'>
                <li>작성일</li>
                <li>제목</li>
                <li>작성자</li>
            </ul>
            <div id='rightNorList'>
            {data[1].map(info =>
                <NorRightList info={info} key={info.id} />
            )}
            </div>
            <Link to="/normemocreate"><button id='addNorBtn'>글쓰기</button></Link>
        </div>
    );
};

export default NorRight;