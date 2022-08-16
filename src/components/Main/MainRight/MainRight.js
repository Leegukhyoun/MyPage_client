import React from 'react';
import { MdOutlineEventNote } from 'react-icons/md';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import { AiOutlinePicture } from 'react-icons/ai';
import { Calender } from './Calendar/Calender';
import RightDday from './RightDday';
import NorMemoView from './NorMemoView';
import PicItem from './PicItem';
import PicItemVoid from './PicItemVoid';
import DdayAddWindow from './DdayAddWindow';
import { Link, useNavigate } from 'react-router-dom';


const MainRight = ({pic, nor, dday}) => {
    const navigate = useNavigate();
    const goImgAdd = (e) => {
        e.preventDefault();
        navigate("/picmemocreate");
    }
    return (
        <div id='mainright'>
            <div id='rightTop'>
                <div id='picTitle'>
                    <div></div>
                    <h2><AiOutlinePicture /><p>사진 메모</p></h2>
                    <div className='boardmore'>
                        <Link to="/picmemo">
                            <p>더보기</p>
                            <span><HiOutlineArrowCircleRight /></span>
                        </Link>
                    </div>
                </div>
                <div id='picView'>
                    {pic.map(Data =>
                        <PicItem Data={Data} key={Data.id} />
                    )}
                    <PicItemVoid pic={pic} goImgAdd={goImgAdd}/>
                </div>
                <div id='boaCal'>
                    <div id='board'>
                        <div id='boardtitle'>
                            <span><MdOutlineEventNote/></span>
                            <h4>
                                일반 메모 게시판
                            </h4>      
                            <div className='boardmore'>
                                <Link to="/normemo">
                                    <p id='moreBtn'>더보기</p>
                                    <span><HiOutlineArrowCircleRight /></span>
                                </Link>
                            </div>
                        </div>
                        <ul id='titleUl'>
                            <li>제목</li>
                            <li>날짜</li>
                        </ul>
                        <ul id='boardUl'>
                            {nor.map(Data=>
                                <NorMemoView Data={Data} key={Data.id}/>   
                            )}
                        </ul>
                    </div>
                    <div id='calendar'>
                        <Calender/>
                    </div>
                </div>
            </div>
            <div id='rightBot'>
                <DdayAddWindow />
                <RightDday dday={dday}/>
            </div>
        </div>
    );
};

export default MainRight;