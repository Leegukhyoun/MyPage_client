const HEADER_ON = "HEADER_ON";


const initialState = {
    utils: {
        headerToggle : false,
    },
}

export const headerOn = () => {
    return {
        type: HEADER_ON,
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
        default:
            return state;
    }
}