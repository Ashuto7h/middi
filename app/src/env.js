export default {
    apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : 'https://middi-9hsdz.ondigitalocean.app/api',
    habitColors: [
        '#FFADAD',
        '#FFD6A5',
        '#FDFFB6',
        '#CAFFBF',
        '#9BF6FF',
        '#A0C4FF',
        '#BDB2FF',
        '#FFC6FF'
    ]
};