
type EnvType = {
    apiUrl: string;
    habitColors: {
        [key: string]: string
    }
};

const env: EnvType = {
    apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : 'https://middi-9hsdz.ondigitalocean.app/api',
    habitColors: {
        hc1: '#FFADAD',
        hc2: '#FFD6A5',
        hc3: '#FDFFB6',
        hc4: '#CAFFBF',
        hc5: '#9BF6FF',
        hc6: '#A0C4FF',
        hc7: '#BDB2FF',
        hc8: '#FFC6FF'
    }
};

export default env;