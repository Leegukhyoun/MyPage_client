import axios from "axios";
import { API_URL } from '../config/apiurl';


// 리덕스 액션타입, 초깃갑, 액션 생성 함수, 리듀서
const SET_SIGNUP_INPUT = "SET_SIGNUP_INPUT";
const SET_ADDR1 = "SET_ADDR1";
const SET_IMG = "SET_IMG";
const SET_SIGNUP_RESET = "SET_SIGNUP_RESET";



const initialState = {
    userid: "",
    name: "",
    pw: "",
    pwch : "",
    phone1: "",
    phone2: "",
    phone3: "",
    email1: "",
    email2: "",
    addr1: "",
    addr2: "",
    img: "no-image.png"
}



export const setSignUpInput = (e) => {
    const { name, value } = e.target;
    return {
        type: SET_SIGNUP_INPUT,
        name,
        value
    }
}
export const resetInput = () => {
    return {
        type: SET_SIGNUP_RESET,
    }
}

export const setAddr = (addr) => {
    return {
        type: SET_ADDR1,
        addr
    }
}

export const setImg = (img) => {
    return {
        type: SET_IMG,
        img
    }
}

export const setSignup = () => async (dispatch, getState) => {
    const formdata = getState().createUser;
    try{
        //eslint-disable-next-line
        // await axios.post(`${API_URL}/image`, formdata)
        const response = await axios.post(`${API_URL}/join`, formdata)
        alert('회원 가입에 성공하였습니다.')
        dispatch({ type: SET_SIGNUP_RESET})
    }
    catch(e) {
        alert('실패');
        dispatch({ type: SET_SIGNUP_RESET})
    }
}

export default function signup(state = initialState, action) {
    switch (action.type) {
        case SET_SIGNUP_INPUT:
            return {
                ...state,
                [action.name]: action.value
            }
        case SET_SIGNUP_RESET:
            return {
                ...state,
                userid: "",
                name: "",
                pw: "",
                pwch: "",
                phone1: "",
                phone2: "",
                phone3: "",
                email1: "",
                email2: "",
                addr1: "",
                addr2: "",
                img: "no-image.png"
            }
        case SET_ADDR1:
            return {
                ...state,
                addr1: action.addr
            }
        case SET_IMG:
            return {
                ...state,
                img: action.img
            }
        default:
            return state;
    }
}