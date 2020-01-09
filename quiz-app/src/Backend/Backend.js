import axios from 'axios'

export default axios.create({
    baseURL: 'https://quiz-app-test-65023.firebaseio.com/'
})