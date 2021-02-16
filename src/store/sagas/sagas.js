import {
    put,
    call,
    takeLatest
} from 'redux-saga/effects';

import {
    SET_LOADING,
    GET_COURSES,
    GET_COURSES_SUCCESS,
    GET_COURSES_INDEX,
    GET_COURSES_INDEX_SUCCESS
} from '../actions/types';

import {
    getAllCourses,
    getCoursesIndex
} from '../api/all-api';

function* getCourses() {
    yield put({ type: SET_LOADING })

    const courses = yield call(getAllCourses)

    yield put({ type: GET_COURSES, payload: courses })
}

function* getCoursesByIndex() {
    yield put({ type: SET_LOADING })

    const coursesIndex = yield call(getCoursesIndex)

    yield put({ type: GET_COURSES_INDEX, payload: coursesIndex })
}

export default function* allSaga() {
    yield takeLatest(GET_COURSES_SUCCESS, getCourses)
    yield takeLatest(GET_COURSES_INDEX_SUCCESS, getCoursesByIndex)
}