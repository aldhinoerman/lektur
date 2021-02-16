import {
    SET_LOADING,
    GET_COURSES,
    GET_COURSES_INDEX,
} from '../actions/types';

const initialState = {
    loading: false,
    category: null,
    title: null,
    courses: [],
    coursesIndex: []
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
        case GET_COURSES_INDEX:
            return {
                ...state,
                coursesIndex: payload,
                loading: false,
                category: payload,
                title: payload
            }
        default:
            return state
    }
}