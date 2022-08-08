const HEADER_ON = "HEADER_ON";
const HEADER_OFF = "HEADER_OFF";
const ON_BMW = "ON_BMW";
const CLOSE_BMW = "CLOSE_BMW";
const TOGGLE_JW = "TOGGLE_JW";
const TOGGLE_DAW = "TOGGLE_DAW";
const TOGGLE_BM = "TOGGLE_BM";
const TOGGLE_MORE_BM = "TOGGLE_MORE_BM";
const BMADD_ON = "BMADD_ON";
const BMADD_OFF = "BMADD_OFF";
const CLOCK_TOGGLE = "CLOCK_TOGGLE";

const initialState = {
    utils: {
        headerToggle : false,
        openBMW : false,
        openJW : false,
        openDAW : false,
        toggleBM : false,
        toggleMoreBM : false,
        toggleBMADD : false,
        toggleCLOCK : false,
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
export const toggleBM = () => {
    return {
        type: TOGGLE_BM,
    }
}
export const setToggleMoreBM = () => {
    return {
        type: TOGGLE_MORE_BM,
    }
}
export const setOnBMADD = () => {
    return {
        type: BMADD_ON,
    }
}
export const setOffBMADD = () => {
    return {
        type: BMADD_OFF,
    }
}
export const setClockOn = () => {
    return {
        type: CLOCK_TOGGLE,
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
        case TOGGLE_BM:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    toggleBM: !state.utils.toggleBM,
                }
            }
        case TOGGLE_MORE_BM:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    toggleMoreBM: !state.utils.toggleMoreBM,
                }
            }
        case BMADD_ON:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    toggleBMADD: true,
                }
            }
        case BMADD_OFF:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    toggleBMADD: false,
                }
            }
        case CLOCK_TOGGLE:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    toggleCLOCK: !state.utils.toggleCLOCK,
                }
            }
        default:
            return state;
    }
}