import axios from "axios";

const GET_USER = "GET_RGET_USERES";
const GET_USER_ERROR = "GET_USER_ERROR";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";
const initialState = {
    user: {
        loading: false,
        data: null,
        error: null,
    },
}

export const pointUser = () => async dispatch => {
    dispatch({type: GET_USER});
    //eslint-disable-next-line
    try {
        const response = await axios.get(`http://localhost:3001/mainindex/freiheit512`);
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
        default:
            return state;
    }
}