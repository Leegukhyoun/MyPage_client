import axios from "axios";
import { API_URL } from "../config/apiurl";
import { getCookie } from "../util/cookie";


const GET_USER = "GET_RGET_USERES";
const GET_USER_ERROR = "GET_USER_ERROR";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";
const SET_LOGIN = "SET_LOGIN";
const SET_LOGOUT = "SET_LOGOUT";
const SET_USERID = "SET_USERID";
const initialState = {
    user: {
        loading: false,
        data: null,
        error: null,
    },
    login : {
        isLogin : false,
        userid : ""
    }
}

export const setLogin = () => {
    return {
        type : SET_LOGIN
    }
}
export const setLogout = () => {
    return {
        type : SET_LOGOUT
    }
}
export const setuserid = (userid) => {
    return {
        type : SET_USERID,
        userid
    }
}
export const goToHome = (navigate) => () => {
    navigate(`/mainindex`);
}
export const goToLogin = (navigate) => () => {
    navigate(`/`);
}
export const pointUser = () => async dispatch => {
    dispatch({type: GET_USER});
    const id = getCookie('userid');
    //eslint-disable-next-line
    try {
        const response = await axios.get(`${API_URL}/mainindex/${id}`);
        const user = response.data;
        dispatch({type:GET_USER_SUCCESS, user})
    }
    catch(e){
        dispatch({type:GET_USER_ERROR, error : e})
    }
}

export default function users(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: {
                    loading: true,
                    data: null,
                    error: null,
                }
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: {
                    loading: false,
                    data: action.user,
                    error: null,
                }
            }
        case GET_USER_ERROR:
            return {
                ...state,
                user: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        case SET_LOGIN:
            return {
                ...state,
                login : {
                    isLogin: true
                }
            }
        case SET_LOGOUT:
            return {
                ...state,
                login : {
                    isLogin: true
                }
            }
        case SET_USERID:
            return {
                ...state,
                login: {
                    userid: action.userid
                }
            }
        default:
            return state;
    }
}