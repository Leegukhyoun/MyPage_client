import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



const Header = () => {
    const { headerToggle } = useSelector(state=>state.pageutils.utils);
    const dispatch = useDispatch();
    
    return (
        <div id='header' style={{display : headerToggle ? 'block' : 'none'}}>
            <div className='inner'>
                <div id='innerHeader'>
                    <Link to="/mainindex"><h1 id='title'>My Home</h1></Link>
                    <ul>
                        <li>전화번호부</li>
                        <li>가계부</li>
                        <li>로그아웃</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;