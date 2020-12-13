export default {
    apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : ''
};