import axios from "axios";
import { API_URL } from '../config/apiurl';

const SET_EMER_INPUT = "SET_EMER_INPUT";
const SET_EMER_RESET = "SET_EMER_RESET";
const SET_USERID = "SET_USERID";

const initialState = {
    emer: {
        emertext: "",
        userid:"",
    },
    nor: {
        nortext: "",
        userid: "",
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
                emer : {
                    ...state.emer,
                    userid : action.userid
                }
            }
        default:
            return state;
    }
}