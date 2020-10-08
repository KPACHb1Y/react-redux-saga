import {HIDE_ALERT, HIDE_SPINNER, SHOW_ALERT, SHOW_SPINNER} from "./types";

const initialState = {
    loading: false,
    alert: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SPINNER:
            return {...state, loading: true}
        case SHOW_ALERT:
            return {...state, alert: action.payload}
        case HIDE_SPINNER:
            return {...state, loading: false}
        case HIDE_ALERT:
            return {...state, alert: null}
        default: return state;
    }
}