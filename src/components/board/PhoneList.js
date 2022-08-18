import axios from 'axios';
import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { API_URL } from '../../config/apiurl';
import { useDispatch } from 'react-redux';
import { pointUser } from '../../module/loginIndex';

const PhoneList = ({data}) => {
    const dispatch = useDispatch();
    function PNdelete() {
        axios.delete(`${API_URL}/PNdelete/${data.id}`)
            .then((result) => {
                dispatch(pointUser());
            })
            .catch((e) => {
                console.log(e)
            })
    }
    return (
        <li>
            <table>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.phone1}-{data.phone2}-{data.phone3}</td>
                    <td>{data.text}</td>
                    <td><BsFillTrashFill onClick={PNdelete}/></td>
                </tr>
            </table>
        </li>
    );
};

export default PhoneList;