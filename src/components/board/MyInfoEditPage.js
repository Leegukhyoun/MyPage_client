import React, { useState } from 'react';
import axios from 'axios';
import {API_URL} from '../../config/apiurl';
import { useDispatch } from 'react-redux';
import { setImg } from '../../module/createUser';

const MyInfoEditPage = () => {
    const [ imageUrl, setImageUrl ] = useState(null);

    const onChangeImage = (e)=>{
        const { name } = e.target;
        const imageFormData = new FormData();
        console.log(name)
        imageFormData.append(name,e.target.files[0]);
        axios.post(`${API_URL}/image`, imageFormData, {
            Headers: { 'content-type': 'multipart/form-data' },
          }).then((response) => {
            console.log({ response });
            setImageUrl(response.data.img);
            dispatch(setImg(response.data.img));
          });
    }
    const dispatch = useDispatch();
    return (
        <div className='NMC'>
            <form>
                <p className='NMCtitle'>내 정보 수정</p>
                <p className='NMCmini'>수정을 완료하고 확인을 눌러주세요.</p> 
                <div className='infoedit'>
                    <p>ID : </p>    
                    <input type="text" name='userid' spellCheck="false" autoComplete='off' readOnly/>
                </div>
                <div className='infoedit'>
                    <p>비밀번호 : </p>    
                    <input type="text" name='pw' spellCheck="false" autoComplete='off'/>
                </div>
                <div className='infoedit'>
                    <p>비밀번호 확인 : </p>    
                    <input type="text" name='pwch' spellCheck="false" autoComplete='off'/>
                </div>
                <div className='infoedit'>
                    <p>연락처 : </p>    
                    <div className='infoeditphone'>
                        <input type="text" name='phone1' spellCheck="false" autoComplete='off'/>
                        <input type="text" name='phone2' spellCheck="false" autoComplete='off'/>
                        <input type="text" name='phone3' spellCheck="false" autoComplete='off'/>
                    </div>
                </div>
                <div className='infoedit'>
                    <p>E-mail : </p>    
                    <div className='infoeditemail'>
                        <input type="text" name='email1' spellCheck="false" autoComplete='off'/>
                        <input type="text" name='email2' spellCheck="false" autoComplete='off'/>
                    </div>
                </div>
                <div className='infoedit'>
                    <p>주소 : </p>    
                    <div className='infoeditaddr'>
                        <input type="text" name='addr1' spellCheck="false" autoComplete='off'/>
                        <input type="text" name='addr2' spellCheck="false" autoComplete='off'/>
                    </div>
                </div>
                <div className='infoedit'>
                    <p>프로필 이미지 : </p>    
                    <div className='infoeditpic'>
                        <input type="file" name='img' onChange={onChangeImage} />
                        {imageUrl ?
                            (<div className='uploadImg'>
                                <img src={`${API_URL}/upload/${imageUrl}`} alt="" id='imgview' />
                                <button>이미지 선택</button>
                            </div>)
                            :
                            (<div className='uploadImg'>
                                <img src={`${API_URL}/upload/no-image.png`} alt=''/>
                                <button>이미지 선택</button>
                            </div>)}
                    </div>
                </div>
                <div className='NMCBtn'>
                    <button>수정</button>
                    <button>취소</button>
                </div>
            </form>
        </div>
    );
};

export default MyInfoEditPage;