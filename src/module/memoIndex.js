import axios from "axios";
import { API_URL } from '../config/apiurl';        

const SET_EMER_INPUT = "SET_EMER_INPUT";        //오면 이 글부터 봐라
const SET_EMER_RESET = "SET_EMER_RESET";        //월요일에 노말 글쓰기 만들고있었고
const SET_USERID = "SET_USERID";                //이제 리덕스 추가하면 된다
const SET_DATE = "SET_DATE";                    //바로 이 페이지에서 시작하면 되니까
const SET_DDAY_INPUT = "SET_DDAY_INPUT";        //딴데로 새지마라
const SET_DDAY_RESET = "SET_DDAY_RESET";
const SET_DDAY_USERID = "SET_DDAY_USERID";

const SET_BMADD_INPUT = "SET_BMADD_INPUT";
const SET_BMADD_RESET = "SET_BMADD_RESET";
const SET_BMADD_USERID = "SET_BMADD_USERID";

const initialState = {
    emer: {
        emertext: "",
        userid:"",
    },
    dday: {
        datetext: "",
        ddaytext: "",
        userid: "",
    },
    bmadd : {
        userid : "",
        name : "",
        url : "",
    }
}

export const setEmer = (e) => {
    const { name, value } = e.target;
    return {
        type: SET_EMER_INPUT,
        name,
        value
    }
}
export const setUserid = (userid) => {
    return {
        type: SET_USERID,
        userid
    }
}
export const setEmerReset = () => {
    return {
        type: SET_EMER_RESET,
    }
}
export const setDate = (datetext) => {
    return {
        type: SET_DATE,
        datetext
    }
}
export const setDdayInput = (e) => {
    const { name, value } = e.target;
    return {
        type: SET_DDAY_INPUT,
        name,
        value
    }
}
export const setDdayReset = () => {
    return {
        type: SET_DDAY_RESET,
    }
}
export const setDdayUserid = (userid) => {
    return {
        type: SET_DDAY_USERID,
        userid
    }
}

export const setBMAddInput = (e) => {
    const { name, value } = e.target;
    return {
        type: SET_BMADD_INPUT,
        name,
        value
    }
}
export const setBMAddReset = () => {
    return {
        type: SET_BMADD_RESET,
    }
}
export const setBMAddUserid = (userid) => {
    return {
        type: SET_BMADD_USERID,
        userid
    }
}

export const addEmer = () => async (dispatch, getState) => {
    const formdata = getState().memoIndex.emer;
    console.log(formdata);
    try{
        //eslint-disable-next-line
        // await axios.post(`${API_URL}/image`, formdata)
        const response = await axios.post(`${API_URL}/emerAdd`, formdata)
        dispatch({ type: SET_EMER_RESET})
    }
    catch(e) {
        alert('실패');
        dispatch({ type: SET_EMER_RESET})
    }
}

export const addDday = () => async (dispatch, getState) => {
    const formdata = getState().memoIndex.dday;
    console.log(formdata);
    try{
        //eslint-disable-next-line
        // await axios.post(`${API_URL}/image`, formdata)
        const response = await axios.post(`${API_URL}/ddayAdd`, formdata)
        dispatch({ type: SET_DDAY_RESET})
    }
    catch(e) {
        alert('실패');
        dispatch({ type: SET_DDAY_RESET})
    }
}

export const addBmAdd = () => async (dispatch, getState) => {
    const formdata = getState().memoIndex.bmadd;
    console.log(formdata);
    try{
        //eslint-disable-next-line
        // await axios.post(`${API_URL}/image`, formdata)
        const response = await axios.post(`${API_URL}/bmadd`, formdata)
        dispatch({ type: SET_BMADD_RESET})
    }
    catch(e) {
        dispatch({ type: SET_BMADD_RESET})
    }
}

export default function memo(state = initialState, action) {
    switch (action.type) {
        case SET_EMER_INPUT:
            return {
                ...state,
                emer: {
                    ...state.emer,
                    [action.name]: action.value
                }
            }
        case SET_EMER_RESET:
            return {
                ...state,
                emer: {
                    ...state.emer,
                    emertext : "",
                    userid : ""
                }
            }
        case SET_USERID:
            return {
                ...state,
                emer: {
                    ...state.emer,
                    userid: action.userid
                }
            }
        case SET_DATE:
            return {
                ...state,
                dday: {
                    ...state.dday,
                    datetext: action.datetext
                }
            }
        case SET_DDAY_INPUT:
            return {
                ...state,
                dday: {
                    ...state.dday,
                    [action.name]: action.value
                }
            }
        case SET_DDAY_RESET:
            return {
                ...state,
                dday: {
                    ...state.dday,
                    datetext: "",
                    ddaytext: "",
                    userid: "",
                }
            }
        case SET_DDAY_USERID:
            return {
                ...state,
                dday: {
                    ...state.dday,
                    userid: action.userid
                }
            }
        case SET_BMADD_INPUT:
            return {
                ...state,
                bmadd: {
                    ...state.bmadd,
                    [action.name]: action.value
                }
            }
        case SET_BMADD_RESET:
            return {
                ...state,
                bmadd: {
                    ...state.bmadd,
                    userid: "",
                    name: "",
                    url: "",
                }
            }
        case SET_BMADD_USERID:
            return {
                ...state,
                bmadd: {
                    ...state.bmadd,
                    userid: action.userid
                }
            }
        default:
            return state;
    }
}