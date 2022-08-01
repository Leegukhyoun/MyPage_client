import React from 'react';
import { MdOutlineEventNote } from 'react-icons/md';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import { AiOutlinePicture } from 'react-icons/ai';
import { Calender } from './Calendar/Calender';
import RightDday from './RightDday';


const MainRight = () => {
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
                    <ul className='picboard'>
                        <li><img src='images/messi.jpg' alt='' /></li>
                        <li>
                            <h5>웰시코기 메시</h5>
                            <p>
                                <div className='userIcon'>
                                    <img src='images/wak.jpg' alt='' />
                                </div>
                                <div className='picName'>
                                    오영택
                                </div>
                            </p>
                        </li>
                        <div className='blackbg'><p>자세히보기</p></div>
                    </ul> 
                    <ul className='picboard'>
                        <li><img src='images/messi.jpg' alt='' /></li>
                        <li>
                            <h5>웰시코기 메시</h5>
                            <p>
                                <div className='userIcon'>
                                    <img src='images/wak.jpg' alt='' />
                                </div>
                                <div className='picName'>
                                    오영택
                                </div>
                            </p>
                        </li>
                        <div className='blackbg'><p>자세히보기</p></div>
                    </ul> 
                    <ul className='picboard'>
                        <li><img src='images/messi.jpg' alt='' /></li>
                        <li>
                            <h5>웰시코기 메시</h5>
                            <p>
                                <div className='userIcon'>
                                    <img src='images/wak.jpg' alt='' />
                                </div>
                                <div className='picName'>
                                    오영택
                                </div>
                            </p>
                        </li>
                        <div className='blackbg'><p>자세히보기</p></div>
                    </ul> 
                    <ul className='picboard'>
                        <li><img src='images/messi.jpg' alt='' /></li>
                        <li>
                            <h5>웰시코기 메시</h5>
                            <p>
                                <div className='userIcon'>
                                    <img src='images/wak.jpg' alt='' />
                                </div>
                                <div className='picName'>
                                    오영택
                                </div>
                            </p>
                        </li>
                        <div className='blackbg'><p>자세히보기</p></div>
                    </ul> 
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
                            <li>
                                <ul>
                                    <li>07-28</li>
                                    <li><span>오늘 저녁 살거 메모</span></li>
                                    <li>박성수</li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>07-28</li>
                                    <li><span>초코팅촉 판매점 목록</span></li>
                                    <li>이국현</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div id='calendar'>
                        <Calender/>
                    </div>
                </div>
            </div>
            <div id='rightBot'>
                <RightDday/>
            </div>
        </div>
    );
};

export default MainRight;