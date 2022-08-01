import axios from "axios";

const GET_LOGIN_ERROR = "GET_LOGIN_ERROR";
const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
const SET_LOGIN_INPUT = "SET_LOGIN_INPUT";
const SET_LOGIN = "SET_LOGIN";
const SET_LOGOUT = "SET_LOGOUT";
const SET_LOGINPUT_RESET = "SET_LOGINPUT_RESET";
const GET_USER = "GET_USER";
const GET_USER_ERROR = "GET_USER_ERROR";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";

const initialState = {
    loginUser: {
        loading: false,
        data: null,
        error: null,
        userId : "",
        userPw: "",
        islog : null,
    },
    UserInfo : {
        loading: false,
        data: null,
        error: null,
    }
}

export const goToHome = (navigate) => () => {
    navigate(`/main/${sessionStorage.getItem('userid')}`);
}

export const setLoginInput = (e) => {
    const { name, value } = e.target;
    return {
        type: SET_LOGIN_INPUT,
        name,
        value
    }
}

export const getLogin = () => async (dispatch, getState) => {
    const formdata = getState().loginIndex.loginUser;
    console.log(formdata);
    try{
        const response = await axios.post(`http://localhost:3001/userlogin`, formdata);
        const users = response.data;
        dispatch({ type:GET_LOGIN_SUCCESS, users})
            if(users === 'id is undefined') return "id";
            if(users === 'pw is undefined') return "pw";
            if(users === 'login successed'){
                sessionStorage.setItem('userid', formdata.userId);
                const nowLoged = sessionStorage.getItem('userid');
                dispatch({type : SET_LOGIN, nowLoged})
                dispatch({type : SET_LOGINPUT_RESET})
                return "성공"
            };
    }
    catch (e){
        dispatch({ type:GET_LOGIN_ERROR, error: e })
    }
}

export const searchUser = () => async dispatch => {
    dispatch({type: GET_USER});
    //eslint-disable-next-line
    try {
        const response = await axios.get(`http://localhost:3001/main/freiheit512`);
        const res = response.data;
        dispatch({type:GET_USER_SUCCESS, res})
    }
    catch(e){
        dispatch({type:GET_USER_ERROR, error : e})
    }
}

export default function users(state = initialState, action) {
    switch (action.type) {
        case GET_LOGIN_SUCCESS:
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    loading: false,
                    data: action.loginUser,
                    error: null
                }
            }
        case GET_LOGIN_ERROR:
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        case SET_LOGIN_INPUT:
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    [action.name]: action.value
                }
            }
        case SET_LOGIN:
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    islog: action.nowLoged
                }
            }
        case SET_LOGOUT:
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    islog: null
                }
            }
        case SET_LOGINPUT_RESET:
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    loading: false,
                    data: null,
                    error: null,
                    userid: "",
                    pw: "",
                    islog: null,
                }
            }
        case GET_USER:
            return {
                ...state,
                UserInfo: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                UserInfo: {
                    loading: false,
                    data: action.res,
                    error: null
                }
            }
        case GET_USER_ERROR:
            return {
                ...state,
                UserInfo: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        default:
            return state;
    }
}