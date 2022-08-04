import React from 'react';
import axios from 'axios';
import { API_URL } from '../../../config/apiurl';
import { useDispatch } from 'react-redux';
import { pointUser } from '../../../module/loginIndex';
const BookMemo = ({info}) => {
    const dispatch = useDispatch();
    function delRes(){
        axios.delete(`${API_URL}/delemer/${info.id}`)
        .then((result)=>{
            dispatch(pointUser());
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    return (
        <li>
            <div id='itemText'><p>{info.memo}</p></div>
            <div id='itemDel' onClick={delRes}>
                <div>
                    <span className='itemBtn'></span>
                    <span className='itemBtn'></span>
                </div>
            </div>
        </li>
    );
};

export default BookMemo;