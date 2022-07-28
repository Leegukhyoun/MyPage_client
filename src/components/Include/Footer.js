import React from 'react';

const Footer = () => {
    return (
        <div id='footer'>
            <div className='inner'>
                <div id='footerTop'>
                    <p>ARS(없음)</p>
                    <p>대표전화 <span>010-4062-8312</span></p>
                </div>
                <div id='footerBot'>
                    <div className='footerDis'>
                        <p>홈페이지 소개</p>
                        <p>개인정보 처리방침</p>
                    </div>
                    <div className='footerDis'>
                        <ul>
                            <li>대표 이국현</li>
                            <li>경북 경주 금장로 5길 34 신한토탈 109동 203호</li>
                            <li>고객센터 : 대표 전화 (09:00 ~ 18:00 / 매일 휴무 희망)</li>
                        </ul>
                    </div>
                </div>
                <p>
                    Copyright©2022 LLE Corp. All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;