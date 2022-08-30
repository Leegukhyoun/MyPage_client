import React, { useEffect } from 'react';
import { addPnAdd, setPNAddInput, setPNAddReset, setPNAddUserid } from '../../module/memoIndex';
import PhoneList from './PhoneList';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../../util/cookie';
import { pointUser } from '../../module/loginIndex';
import { setOffPNADD, setOnPNADD } from '../../module/pageutils';

const PhoneMemo = ({data}) => {
    const PNADD = useSelector(state=>state.memoIndex.pnadd);
    const { togglePNADD } = useSelector(state=>state.pageutils.utils);
    const userid = getCookie('userid');
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(setOffPNADD());
    },[])

    const setReset = () => {
        dispatch(setPNAddReset())
    }
    const setUserid = (userid) => {
        dispatch(setPNAddUserid(userid))
    }
    const setInput = (e) => {
        dispatch(setPNAddInput(e));
        setUserid(userid);
    }
    const addPN = async () => {
        if (!PNADD.phone1) {
            alert('전화번호를 입력해주세요.')
        } else {
            await dispatch(addPnAdd());
            await dispatch(pointUser());
            dispatch(setOffPNADD());
        }
    }
    const PNBtn = (e) => {
        e.preventDefault();
        dispatch(setOnPNADD());
    }
    return (
        <div className='subRight'>
            <h1>전화번호부</h1>
            <div id='BMmanager'>
                <form>
                    <div id='BMAddBtn'>
                        <div id='BMAddInput' style={{ opacity: togglePNADD ? '1' : '0', pointerEvents: togglePNADD ? 'auto' : 'none' }}>
                            <p>이름 : <input className='PMInput' onChange={setInput} name='name' value={PNADD.name} type="text" id="BMinput" spellCheck="false" autoComplete='off' />
                             <span id='PM1'>연락처 : </span><input className='PMInput' id='PM2' onChange={setInput} name='phone1' value={PNADD.phone1} type="text" spellCheck="false" autoComplete='off' />
                              - <input className='PMInput' onChange={setInput} value={PNADD.phone2} name='phone2'  type="text" spellCheck="false" autoComplete='off' />
                               - <input className='PMInput' onChange={setInput} name='phone3' value={PNADD.phone3} type="text" spellCheck="false" autoComplete='off' />
                               <span>　　비고 : <input id='PM3' className='PMInput'  onChange={setInput} name='text' value={PNADD.text} type="text" spellCheck="false" autoComplete='off' /></span></p>
                        </div>
                        <button onClick={PNBtn}>등록</button>
                        <button id='submitBM' onClick={addPN} style={{ display: togglePNADD ? 'block' : 'none' }}>완료</button>
                    </div>
                </form>
                <table>
                    <tbody>
                    <tr>
                        <td>이름</td>
                        <td>연락처</td>
                        <td>비고</td>
                    </tr>
                    </tbody>
                </table>
                <ul id='PMtable'>
                    {data.map(data =>
                        <PhoneList data={data} key={data.id}/>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default PhoneMemo;