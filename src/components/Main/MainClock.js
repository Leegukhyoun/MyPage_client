import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {useInterval} from 'react-use'
import { useSelector, useDispatch } from 'react-redux';
import { setClockOn } from '../../module/pageutils';

const MainClock = () => {
    const { toggleCLOCK } = useSelector(state=>state.pageutils.utils);
    const dispatch = useDispatch();
    const [ nowtimeHour, setNowtimeHour ] = useState(moment().format('HH'));
    const [ nowtimeMinute, setNowtimeMinute ] = useState(moment().format('mm'));
    const [ nowtimeSec, setNowTimeSec ] = useState(moment().format('ss'));

    useInterval(() => {
        setNowtimeHour(moment().format('HH'));
        setNowtimeMinute(moment().format('mm'));
        setNowTimeSec(moment().format('ss'));
      }, 1000);

    const ClockBtn = () => {
        dispatch(setClockOn());
    }

    return (
        <div id='Clock' onClick={ClockBtn}>
            <h2>{nowtimeHour} <span className={toggleCLOCK ? 'clockSec' : 'clockDot'}>:</span> {nowtimeMinute} <div style={{display : toggleCLOCK ? 'block' : 'none'}}><span className={toggleCLOCK ? 'clockSec' : 'clockDot'}>:</span>{nowtimeSec}</div></h2>
        </div>
    );
};

export default MainClock;