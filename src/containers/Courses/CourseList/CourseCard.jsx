import React, { useEffect } from 'react';
import { Container, Button, Row, Col, Spinner, CardDeck, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../components/style/App.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    GET_COURSES_SUCCESS,
    GET_COURSES_INDEX_SUCCESS
} from '../../../store/actions/types';

const CourseList = ({
    course: { loading, courses, coursesIndex, category },
    getCourses,
    getCoursesByIndex
}) => {

    useEffect(() => {
        getCourses()
    }, [getCourses])

    const handleSubmit = category = e => {
        e.preventDefault();
        getCoursesByIndex(category);
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
                                    <Button onClick={handleSubmit(v.category)} variant="outline-warning">{v.category}</Button>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
                <Container data-aos="fade">
                <CardDeck className="cardList">
                    {loading ? <Spinner animation="grow" /> : courses && courses.map((v, index) => (
                        <div key={index}>
                            <Card className="h-100 link" as={Link} to="/">
                                <Card.Img className="cardimg" variant="top" fluid='true' src={v.image} />
                                <Card.Body>
                                    <Card.Title>{v.title} <br />
                                        <Card.Text className="writer">{v.user.name}</Card.Text>
                                        <span className="note">{v.lesson} Videos &nbsp;&nbsp;&nbsp;&nbsp; {v.material} Learning Material</span>
                                    </Card.Title>
                                    <Card.Text>{v.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Card.Text>{v.category}</Card.Text>
                                </Card.Footer>
                            </Card>
                        </div>
                    ))}
                </CardDeck>
            </Container>
            </div>
        </React.Fragment>
    )
}

CourseList.propTypes = {
    loading: PropTypes.bool,
    category: PropTypes.string,
    title: PropTypes.string,
    courses: PropTypes.array,
    coursesIndex: PropTypes.array,
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseList)