import axios from "axios";
import { API_URL } from '../config/apiurl';    
import moment from "moment";  
import { getCookie } from "../util/cookie";

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

const SET_NORMEM_INPUT = "SET_NORMEM_INPUT";
const SET_NORMEM_RESET = "SET_NORMEM_RESET";
const SET_NORMEM_USERID = "SET_NORMEM_USERID";
const EDIT_NORMEM_INPUT = "EDIT_NORMEM_INPUT";

const GET_NOR = "GET_NOR";
const GET_NOR_ERROR = "GET_NOR_ERROR";
const GET_NOR_SUCCESS = "GET_NOR_SUCCESS";

const SET_PICMEM_INPUT = "SET_PICMEM_INPUT";
const SET_PICMEM_RESET = "SET_PICMEM_RESET";
const SET_PICMEM_USERID = "SET_PICMEM_USERID";
const SET_IMG = "SET_IMG";
const EDIT_PICMEM_INPUT = "EDIT_PICMEM_INPUT";

const GET_PIC = "GET_PIC";
const GET_PIC_ERROR = "GET_PIC_ERROR";
const GET_PIC_SUCCESS = "GET_PIC_SUCCESS";

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
    },
    normem : {
        userid : "",
        title : "",
        norDesc : "",
        nowDate : moment().format("YYYY-MM-DD HH:mm:ss"),
        search : "",
    },
    getnor: {
        loading: false,
        data: null,
        error: null,
    },
    picmem : {
        userid : "",
        pictitle : "",
        picDesc : "",
        picImg : "",
        nowDate : moment().format("YYYY-MM-DD HH:mm:ss"),
        search : "",
    },
    getpic: {
        loading: false,
        data: null,
        error: null,
    },
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

export const setNorMemInput = (e) => {
    const { name, value } = e.target;
    return {
        type: SET_NORMEM_INPUT,
        name,
        value
    }
}
export const editNorMemInput = (title, norDesc) => {
    return {
        type: EDIT_NORMEM_INPUT,
        title : title,
        norDesc : norDesc
    }
}
export const setNorMemReset = () => {
    return {
        type: SET_NORMEM_RESET,
    }
}
export const setNorMemUserid = (userid) => {
    return {
        type: SET_NORMEM_USERID,
        userid
    }
}

export const setPicMemInput = (e) => {
    const { name, value } = e.target;
    return {
        type: SET_PICMEM_INPUT,
        name,
        value
    }
}
export const setPicMemReset = () => {
    return {
        type: SET_PICMEM_RESET,
    }
}
export const setPicMemUserid = (userid) => {
    return {
        type: SET_PICMEM_USERID,
        userid
    }
}
export const setImg = (img) => {
    return {
        type: SET_IMG,
        img
    }
}
export const editPicMemInput = (pictitle, picDesc, picImg) => {
    return {
        type: EDIT_PICMEM_INPUT,
        pictitle : pictitle,
        picDesc : picDesc,
        picImg : picImg
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

export const addNormemAdd = () => async (dispatch, getState) => {
    const formdata = getState().memoIndex.normem;
    try{
        //eslint-disable-next-line
        // await axios.post(`${API_URL}/image`, formdata)
        const response = await axios.post(`${API_URL}/normemadd`, formdata)
        dispatch({ type: SET_NORMEM_RESET})
    }
    catch(e) {
        dispatch({ type: SET_NORMEM_RESET})
    }
}

export const getNorMemo = (id) => async dispatch => {
    dispatch({type: GET_NOR});
    //eslint-disable-next-line
    try {
        const response = await axios.get(`${API_URL}${id}`);
        const getnor = response.data;
        dispatch({type:GET_NOR_SUCCESS, getnor})
    }
    catch(e){
        dispatch({type:GET_NOR_ERROR, error : e})
    }
}

export const editNorMemo = (id) => async (dispatch, getState) => {
    const formdata = getState().memoIndex.normem;
    try{
        //eslint-disable-next-line
        const response = await axios.put(`${API_URL}${id}`, formdata)
        console.log(response);
        dispatch({ type: SET_NORMEM_RESET})
    }
    catch(e) {
        dispatch({ type: SET_NORMEM_RESET})
    }
}

export const searchNor = (title) => async dispatch => {
    const userid = getCookie('userid');
    //eslint-disable-next-line
    try {
        const response = await axios.get(`${API_URL}/searchnor/${userid}/${title}`);
        const getnor = response.data;
        dispatch({type:GET_NOR_SUCCESS, getnor})
    }
    catch(e){
        dispatch({type:GET_NOR_ERROR, error : e})
    }
}


export const addPicmemAdd = () => async (dispatch, getState) => {
    const formdata = getState().memoIndex.picmem;
    try{
        //eslint-disable-next-line
        const response = await axios.post(`${API_URL}/picmemadd`, formdata)
        dispatch({ type: SET_PICMEM_RESET})
    }
    catch(e) {
        dispatch({ type: SET_PICMEM_RESET})
    }
}

export const getPicMemo = (id) => async dispatch => {
    dispatch({type: GET_PIC});
    //eslint-disable-next-line
    try {
        const response = await axios.get(`${API_URL}${id}`);
        const getpic = response.data;
        dispatch({type:GET_PIC_SUCCESS, getpic})
    }
    catch(e){
        dispatch({type:GET_PIC_ERROR, error : e})
    }
}
export const editPicMemo = (id) => async (dispatch, getState) => {
    const formdata = getState().memoIndex.picmem;
    try{
        //eslint-disable-next-line
        const response = await axios.put(`${API_URL}${id}`, formdata)
        dispatch({ type: SET_PICMEM_RESET})
    }
    catch(e) {
        dispatch({ type: SET_PICMEM_RESET})
    }
}

export const searchPic = (pictitle) => async dispatch => {
    const userid = getCookie('userid');
    //eslint-disable-next-line
    try {
        const response = await axios.get(`${API_URL}/searchpic/${userid}/${pictitle}`);
        const getpic = response.data;
        dispatch({type:GET_PIC_SUCCESS, getpic})
    }
    catch(e){
        dispatch({type:GET_PIC_ERROR, error : e})
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
        case SET_NORMEM_INPUT:
            return {
                ...state,
                normem: {
                    ...state.normem,
                    [action.name]: action.value
                }
            }
        case SET_NORMEM_RESET:
            return {
                ...state,
                normem: {
                    ...state.normem,
                    userid : "",
                    title : "",
                    norDesc : "",
                    nowDate : moment().format("YYYY-MM-DD HH:mm:ss"),
                    search : "",
                }
            }
        case SET_NORMEM_USERID:
            return {
                ...state,
                normem: {
                    ...state.normem,
                    userid: action.userid
                }
            }
        case EDIT_NORMEM_INPUT:
            return {
                ...state,
                normem: {
                    ...state.normem,
                    title: action.title,
                    norDesc : action.norDesc
                }
            }
        case GET_NOR:
            return {
                ...state,
                getnor: {
                    loading: true,
                    data: null,
                    error: null,
                }
            }
        case GET_NOR_SUCCESS:
            return {
                ...state,
                getnor: {
                    loading: false,
                    data: action.getnor,
                    error: null,
                }
            }
        case GET_NOR_ERROR:
            return {
                ...state,
                getnor: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        case SET_PICMEM_INPUT:
            return {
                ...state,
                picmem: {
                    ...state.picmem,
                    [action.name]: action.value
                }
            }
        case SET_PICMEM_RESET:
            return {
                ...state,
                picmem: {
                    ...state.picmem,
                    userid : "",
                    pictitle : "",
                    picDesc : "",
                    picImg : "",
                    nowDate : moment().format("YYYY-MM-DD HH:mm:ss"),
                    search : "",
                }
            }
        case SET_PICMEM_USERID:
            return {
                ...state,
                picmem: {
                    ...state.picmem,
                    userid: action.userid
                }
            }
        case SET_IMG:
            return {
                ...state,
                picmem: {
                    ...state.picmem,
                    picImg: action.img
                }
            }
        case GET_PIC:
            return {
                ...state,
                getpic: {
                    loading: true,
                    data: null,
                    error: null,
                }
            }
        case GET_PIC_SUCCESS:
            return {
                ...state,
                getpic: {
                    loading: false,
                    data: action.getpic,
                    error: null,
                }
            }
        case GET_PIC_ERROR:
            return {
                ...state,
                getpic: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        case EDIT_PICMEM_INPUT:
            return {
                ...state,
                picmem: {
                    ...state.picmem,
                    pictitle: action.pictitle,
                    picDesc: action.picDesc,
                    picImg : action.picImg
                }
            }
        default:
            return state;
    }
}