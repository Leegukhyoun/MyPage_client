import React from 'react';
import { AiOutlineTags } from 'react-icons/ai';
import { BsChatLeftTextFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import RealBMItem from './RealBMItem';
import { setToggleMoreBM } from '../../../module/pageutils';

const RealBM = ({info, outerBM}) => {
    const {toggleBM, toggleMoreBM} = useSelector(state=>state.pageutils.utils);
    const dispatch = useDispatch();
    const onMoreBtn = () => {
        dispatch(setToggleMoreBM());
    }
    return (
        <>
            <div id='reamBMbox'>
                <div id='reamBMwindow' style={{ bottom: toggleBM ? '0%' : `100%` }}>
                    <ul>
                        <li><AiOutlineTags />북마크</li>
                        {info.map(info =>
                            <RealBMItem info={info} key={info.id} />
                        )}
                    </ul>
                    <div id='moreBM' onClick={onMoreBtn}>
                        <BsChatLeftTextFill />
                    </div>
                </div>
            </div>
            <div id='moreBMbox' style={{pointerEvents: toggleMoreBM ? 'auto' : 'none'}}>
                <div id='moreBMWindow' style={{opacity : toggleMoreBM ? '1' : '0'}}>
                    <ul>
                        {outerBM.map(info =>
                            <RealBMItem info={info} key={info.id} onMoreBtn={onMoreBtn}/>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default RealBM;