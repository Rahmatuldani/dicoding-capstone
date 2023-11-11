import axios from 'axios';

// const bearer = 'secretpassword';

const librify = axios.create({
    baseURL: 'https://librify-api.up.railway.app/api',
    headers: { 'Content-Type': 'application/json' },
});

export default librify;