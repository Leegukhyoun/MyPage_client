import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyPage = ({info}) => {

    const user = info[0];
    
    return (
        <div id='myPage'>
            <div id='status'>
                <Link to="/mainindex/createpic">
                <div id='imgSize'>
                    <img src={`images/${user.img}`} alt='#' />
                </div>
                </Link>
                <div id='myInfo'>
                    <p>{`${user.name}님`}</p>
                    <p>{`${user.email1}@${user.email2}`}</p>
                </div>
                <button>로그아웃</button>
            </div>
            <div id='norSearch'>
                <input type="text" placeholder='일반메모 검색' />
                <div id='norSearchIcon'><FaSearch /></div>
            </div>
            <div id='botBtn'>
                <button>내 정보</button>
                <button>북마크</button>
            </div>
        </div>
    );
};

export default MyPage;