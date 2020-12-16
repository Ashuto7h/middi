
type EnvType = {
    apiUrl: string;
    habitColors: {
        [key: string]: string
    }
};

const env: EnvType = {
    apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : 'https://middi.app/api',
    habitColors: {
        hc1: '#FFADAD',
        hc2: '#FFD6A5',
        hc3: '#CAFFBF',
        hc4: '#9BF6FF',
        hc5: '#A0C4FF',
        hc6: '#BDB2FF',
        hc7: '#FFC6FF'
    }
};

export default env;