import React from 'react';

const NorMemoCreatePage = () => {
    return (
        <div id='NMC'>
            <form>
                <p className='NMCtitle'>일반 메모 작성</p>
                <p className='NMCmini'>사소한 일, 장 볼 것, 잊기 싫은 것 모두 자유롭게 작성 해주세요.</p> 
                <div className='NMCInput'>
                    <p>제목 : </p>    
                    <input type="text" name='title'/>
                </div>
                <div className='NMCInput' id='NMCtext'>
                    <p>내용 : </p>    
                    <textarea name='norDesc'></textarea>
                </div>
                <div className='NMCBtn'>
                    <button>작성</button>
                    <button>취소</button>
                </div>
            </form>
        </div>
    );
};

export default NorMemoCreatePage;