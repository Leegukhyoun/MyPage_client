// 리덕스 액션타입, 초깃갑, 액션 생성 함수, 리듀서
const SET_SCROLLINDEX = "SET_SCROLLINDEX";
const MSG_TOGGLE = "MSG_TOGGLE";
const CAL_TOGGLE = "CAL_TOGGLE";

const initialState = {
    utils: {
        scrollindex : 1,
        resMsgbox : false,
        resCalbox : false,
        whitecolor : '#fff',
        blackcolor : '#000',
    },
}

export const setScroll = (scrollindex) => {
    return {
        type: SET_SCROLLINDEX,
        scrollindex
    }
}
export const toggleMsg = () => {
    return {
        type: MSG_TOGGLE,
    }
}
export const toggleCal = (Cal) => {
    return {
        type: CAL_TOGGLE,
        Cal
    }
}

export default function utils(state = initialState, action) {
    switch (action.type) {
        case SET_SCROLLINDEX:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    scrollindex: action.scrollindex,
                }
            }
        case MSG_TOGGLE:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    resMsgbox: !state.utils.resMsgbox,
                }
            }
        case CAL_TOGGLE:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    resCalbox: action.Cal,
                }
            }
        default:
            return state;
    }
}