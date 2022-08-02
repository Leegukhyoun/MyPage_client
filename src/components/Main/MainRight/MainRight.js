import React from 'react';
import { MdOutlineEventNote } from 'react-icons/md';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import { AiOutlinePicture } from 'react-icons/ai';
import { Calender } from './Calendar/Calender';
import RightDday from './RightDday';
import NorMemoView from './NorMemoView';
import PicItem from './PicItem';
import PicItemVoid from './PicItemVoid';


const MainRight = ({pic, nor, dday}) => {
    return (
        <div id='mainright'>
            <div id='rightTop'>
                <div id='picTitle'>
                    <div></div>
                    <h2><AiOutlinePicture /><p>사진 메모</p></h2>
                    <div className='boardmore'>
                        <p>더보기</p>
                        <span><HiOutlineArrowCircleRight /></span>
                    </div>
                </div>
                <div id='picView'>
                    {pic.map(Data =>
                        <PicItem Data={Data} key={Data.id} />
                    )}
                    <PicItemVoid pic={pic}/>
                </div>
                <div id='boaCal'>
                    <div id='board'>
                        <div id='boardtitle'>
                            <span><MdOutlineEventNote/></span>
                            <h4>
                                일반 메모 게시판
                            </h4>
                            <div className='boardmore'>
                                <p>더보기</p>
                                <span><HiOutlineArrowCircleRight/></span> 
                            </div>
                        </div>
                        <ul id='titleUl'>
                            <li>날짜</li>
                            <li>제목</li>
                            <li>글쓴이</li>
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
                <RightDday dday={dday}/>
            </div>
        </div>
    );
};

export default MainRight;