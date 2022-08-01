import React from 'react';
import { FaRegStickyNote } from 'react-icons/fa';
import { AiOutlinePicture } from 'react-icons/ai';
import { BsCalculator } from 'react-icons/bs';
import { MdOutlinePhoneIphone } from 'react-icons/md';


const MainFixed = () => {



    return (
        <div id='fixed'>
            <div className='fixedIcon'>
                <div className='iconBox'>
                    <FaRegStickyNote/>
                    <p className='iconName'>일반 메모</p>
                </div>
            </div>
            <div className='fixedIcon'>        
                <div className='iconBox'>
                    <AiOutlinePicture/>
                    <p className='iconName'>사진 메모</p>
                </div>
            </div>
            <div className='fixedIcon'>   
                <div className='iconBox'>
                    <BsCalculator/>
                    <p className='iconName'>계산기</p>
                </div>
            </div>
            <div className='fixedIcon'>
                <div className='iconBox'>
                    <MdOutlinePhoneIphone/>
                    <p className='iconName'>전화번호부</p>
                </div>
            </div>
        </div>
    );
};

export default MainFixed;