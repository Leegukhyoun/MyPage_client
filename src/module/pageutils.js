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
const TOGGLE_NDW = "TOGGLE_NDW";
const FIXED_ON = "FIXED_ON";
const FIXED_OFF = "FIXED_OFF";
const TOGGLE_MIW = "TOGGLE_MIW";
const TOGGLE_NOR_ALL = "TOGGLE_NOR_ALL";
const TOGGLE_PIC_ALL = "TOGGLE_PIC_ALL";
const TOGGLE_PDW = "TOGGLE_PDW";
const PNADD_ON = "PNADD_ON";
const PNADD_OFF = "PNADD_OFF";

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
        toggleNDW : false,
        toggleFIXED : false,
        toggleMIW : false,
        toggleNorAll : false,
        togglePicAll : false,
        togglePDW : false,
        togglePN : false,
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
export const toggleNDW = () => {
    return {
        type: TOGGLE_NDW,
    }
}
export const fixedOn = () => {
    return {
        type: FIXED_ON,
    }
}
export const fixedOff = () => {
    return {
        type: FIXED_OFF,
    }
}
export const toggleMIWFn = () => {
    return {
        type: TOGGLE_MIW,
    }
}
export const toggleNorAll = () => {
    return {
        type: TOGGLE_NOR_ALL,
    }
}
export const togglePicAll = () => {
    return {
        type: TOGGLE_PIC_ALL,
    }
}
export const togglePDW = () => {
    return {
        type: TOGGLE_PDW,
    }
}
export const setOnPNADD = () => {
    return {
        type: PNADD_ON,
    }
}
export const setOffPNADD = () => {
    return {
        type: PNADD_OFF,
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
        case TOGGLE_NDW:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    toggleNDW: !state.utils.toggleNDW,
                }
            }
        case FIXED_ON:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    toggleFIXED: true,
                }
            }
        case FIXED_OFF:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    toggleFIXED: false,
                }
            }
        case TOGGLE_MIW:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    toggleMIW: !state.utils.toggleMIW,
                }
            }
        case TOGGLE_NOR_ALL:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    toggleNorAll: !state.utils.toggleNorAll,
                }
            }
        case TOGGLE_PIC_ALL:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    togglePicAll: !state.utils.togglePicAll,
                }
            }
        case TOGGLE_PDW:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    togglePDW: !state.utils.togglePDW,
                }
            }
        case PNADD_ON:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    togglePNADD: true,
                }
            }
        case PNADD_OFF:
            return {
                ...state,
                utils: {
                    ...state.utils,
                    togglePNADD: false,
                }
            }
        default:
            return state;
    }
}