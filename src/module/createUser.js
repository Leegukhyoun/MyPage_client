import axios from "axios";
import { API_URL } from '../config/apiurl';



// 리덕스 액션타입, 초깃갑, 액션 생성 함수, 리듀서
const SET_SIGNUP_INPUT = "SET_SIGNUP_INPUT";
const SET_ADDR1 = "SET_ADDR1";
const SET_SIGNUP_RESET = "SET_SIGNUP_RESET";



const initialState = {
    userid: "",
    name: "",
    pw: "",
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

export const setAddr = (addr) => {
    return {
        type: SET_ADDR1,
        addr
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
                createUser: {
                    ...state.createUser,
                    userid: "",
                    name: "",
                    pw: "",
                    phone1: "",
                    phone2: "",
                    phone3: "",
                    email1: "",
                    email2: "",
                    addr1: "",
                    addr2: "",
                    img: "no-image.png"
                }
            }
        case SET_ADDR1:
            return {
                ...state,
                addr1: action.addr
            }
        default:
            return state;
    }
}