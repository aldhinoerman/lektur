import React, { useEffect } from 'react';
import { Container, Button, Row, Col, Spinner } from 'react-bootstrap';
import '../../../components/style/App.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    GET_COURSES_SUCCESS,
    GET_COURSES_INDEX_SUCCESS
} from '../../../store/actions/types';

const Category = ({
    course: { loading, courses, coursesIndex },
    getCourses,
    getCoursesByIndex
}) => {

    useEffect(() => {
        getCourses()
    }, [getCourses])

    const handleSubmit = category => e => {
        e.preventDefault();
    };

    return (
        <React.Fragment>
            <div data-aos="fade">
                <Container className="category">
                    <h1>What to learn next</h1>
                    <Row>
                        <Col>
                            {loading ? <Spinner animation="grow" /> : courses && courses.filter((ele, ind) => ind === courses.findIndex(elem => elem.category === ele.category)).map((v, index) => (
                                <div key={index}>
                                    <Button onChange={handleSubmit(v.category)} variant="outline-warning">{v.category}</Button>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

Category.propTypes = {
    loading: PropTypes.bool,
    courses: PropTypes.array,
    getCourses: PropTypes.func.isRequired,
    getCoursesByIndex: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    course: state.course,
    loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
    getCourses: () => dispatch({ type: GET_COURSES_SUCCESS }),
    getCoursesByIndex: () => dispatch({ type: GET_COURSES_INDEX_SUCCESS })
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)