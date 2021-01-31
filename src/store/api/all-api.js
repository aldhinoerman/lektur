import axios from 'axios';
// import user from './reducers/user';

export default {
    user: {
        getData: () =>
            axios.get('https://lektur.kuyrek.com/userProfile', 
            { 
                'headers': 
                { 'Authorization': `Bearer ${localStorage.getItem('token')}`
            }}).then(res => res.data.data),
        signUp: user =>
            axios.post('https://lektur.kuyrek.com/signup', 
            { 
                name: user.name, 
                email: user.email, 
                password: user.password 
            } ).then(res => res.data.token).catch(error => error),
        logIn: credentials =>
            axios.post('https://lektur.kuyrek.com/login', { email: credentials.email, password: credentials.password }).then(res => res.data.token).then((token)=> {
            setTimeout(console.log('masuk'), 500)
            localStorage.setItem('token', token);
            window.location.href ="/"
            })
            .catch(error => error),
        getCourse: () =>
            axios.get('https://lektur.kuyrek.com/courses/all').then(res => res.data.data),
        addCourse: course =>
            axios.post('https://lektur.kuyrek.com/courses/create', 
            { 
                title: course.title, 
                overview: course.overview, 
                image: course.image 
            } ).then(res => res.data.data).catch(error => error), 
        addLesson: lesson =>
            axios.post('https://lektur.kuyrek.com/lessons/create', 
            { 
                title: lesson.title, 
                description: lesson.description, 
                video: lesson.video,
                material: lesson.material
            } ).then(res => res.data.data).catch(error => error),
        getStudent: () =>
            axios.get('https://lektur.kuyrek.com/enrolls/get/byTeacherCourse/600079355af27d5219a2345b').then(res => res.data.data),
        
        }
        
};


// res.data.token