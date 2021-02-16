import defaultAxios from 'axios';

const axios = defaultAxios.create({
    baseURL: 'https://lektur.kuyrek.com/'
});

export const getAllCourses = async () => {
    try {
        const courses = await axios.get('courses/all')
        return courses.data.data
    } catch (err) {
        return console.error(err)
    }
}

export const getCoursesIndex = async (category, keyword) => {
    let url = `courses/all`
    if(category) {
        url = `courses/find/byCategory?key=${category}`
    }
    if(keyword) {
        url = `courses/find/byTitle?key=${keyword}`
    }
    try {
        const coursesIndex = await axios.get(url)
        return coursesIndex.data.data
    } catch (err) {
        return console.error(err)
    }
}