import axios from "axios";

const GET_MEMO = "GET_MEMO";
const GET_MEMO_ERROR = "GET_MEMO_ERROR";
const GET_MEMO_SUCCESS = "GET_MEMO_SUCCESS";
const initialState = {
    load: {
        loading: false,
        data: null,
        error: null,
    },
    memo: {
        id : null,
        userId: "",
        title : "",
        norDesc : "",
        nowDate : "",
    }
}


export const searchNorMemo = () => async dispatch => {
    dispatch({type: GET_MEMO});
    //eslint-disable-next-line
    try {
        const response = await axios.get(`http://localhost:3001/mainindex`);
        const load = response.data;
        dispatch({type:GET_MEMO_SUCCESS, load})
    }
    catch(e){
        dispatch({type:GET_MEMO_ERROR, error : e})
    }
}


export default function users(state = initialState, action) {
    switch (action.type) {
        case GET_MEMO:
            return {
                ...state,
                load: {
                    loading: true,
                    data: null,
                    error: null,
                }
            }
        case GET_MEMO_SUCCESS:
            return {
                ...state,
                load: {
                    loading: false,
                    data: action.load,
                    error: null,
                }
            }
        case GET_MEMO_ERROR:
            return {
                ...state,
                load: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        default:
            return state;
    }
}