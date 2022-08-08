import axios from 'axios';
import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { API_URL } from '../../config/apiurl';
import { useDispatch } from 'react-redux';
import { pointUser } from '../../module/loginIndex';

const BookMarkInfo = ({info}) => {
    const dispatch = useDispatch();
    function BMdelete(e) {
        e.preventDefault();
        axios.delete(`${API_URL}/bmdelete/${info.id}`)
            .then((result) => {
                dispatch(pointUser());
            })
            .catch((e) => {
                console.log(e)
            })
    }
    return (
        <li><p>{`${info.name}`}</p> <BsFillTrashFill onClick={BMdelete}/></li>
    );
};

export default BookMarkInfo;