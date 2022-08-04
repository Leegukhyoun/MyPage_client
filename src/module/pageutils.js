const HEADER_ON = "HEADER_ON";
const HEADER_OFF = "HEADER_OFF";
const ON_BMW = "ON_BMW";
const CLOSE_BMW = "CLOSE_BMW";
const TOGGLE_JW = "TOGGLE_JW";
const TOGGLE_DAW = "TOGGLE_DAW";

const initialState = {
    utils: {
        headerToggle : false,
        openBMW : false,
        openJW : false,
        openDAW : false,
    },
}

export const headerOn = () => {
    return {
        type: HEADER_ON,
    }
}
export const headerOFF = () => {
    return {
        type: HEADER_OFF,
    }
}
export const onBMW = () => {
    return {
        type: ON_BMW,
    }
}
export const closeBMW = () => {
    return {
        type: CLOSE_BMW,
    }
}
export const toggleJW = () => {
    return {
        type: TOGGLE_JW,
    }
}
export const toggleDAW = () => {
    return {
        type: TOGGLE_DAW,
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
        case HEADER_OFF:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    headerToggle: false,
                }
            }
        case ON_BMW:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    openBMW: true,
                }
            }
        case CLOSE_BMW:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    openBMW: false,
                }
            }
        case TOGGLE_JW:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    openJW: !state.utils.openJW,
                }
            }
        case TOGGLE_DAW:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    openDAW: !state.utils.openDAW,
                }
            }
        default:
            return state;
    }
}