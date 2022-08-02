const HEADER_ON = "HEADER_ON";
const OPEN_BMW = "OPEN_BMW";

const initialState = {
    utils: {
        headerToggle : false,
        OPEN_BMW : false
    },
}

export const headerOn = () => {
    return {
        type: HEADER_ON,
    }
}
export const openBMW = () => {
    return {
        type: OPEN_BMW,
    }
}

export default function utils(state = initialState, action) {
    switch (action.type) {
        case HEADER_ON:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    headerToggle: true,
                }
            }
        case OPEN_BMW:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    OPEN_BMW: !state.utils.OPEN_BMW,
                }
            }
        default:
            return state;
    }
}