import {
    SET_LOADING,
    GET_COURSES
} from '../actions/types';

const initialState = {
    loading: false,
    courses: []
}

export default(state = initialState, {type, payload}) => {
    switch(type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_COURSES:
            return {
                ...state,
                courses: payload,
                loading: false
            }
        default:
            return state
    }
}