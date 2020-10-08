import {
    CREATE_POST,
    FETCH_POSTS,
    HIDE_ALERT,
    HIDE_SPINNER,
    REQUEST_POSTS,
    SHOW_ALERT,
    SHOW_SPINNER
} from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader() {
    return {
        type: SHOW_SPINNER
    }
}

export function hideLoader() {
    return {
        type: HIDE_SPINNER
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function fetchPosts() {
    return {
        type: REQUEST_POSTS
    }


     /* Return fetch request
     return async dispatch => {
        try {
            dispatch(showLoader())
            const res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=5');
            const json = await res.json();
            setTimeout(() => {
                dispatch({type: FETCH_POSTS, payload: json})
                dispatch(hideLoader())
            }, 1000)
        } catch (e) {
            dispatch(showAlert('Что-то пошло не так'))
        }
    }*/
}