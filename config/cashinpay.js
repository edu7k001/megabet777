const axios = require('axios');

const CASHINPAY_API_KEY = process.env.CASHINPAY_API_KEY;
const CASHINPAY_BASE_URL = 'https://api.cashinpaybr.com/api/v1';

if (!CASHINPAY_API_KEY) {
    throw new Error('CASHINPAY_API_KEY não definida nas variáveis de ambiente');
}

const cashinpayApi = axios.create({
    baseURL: CASHINPAY_BASE_URL,
    headers: {
        'Authorization': `Bearer ${CASHINPAY_API_KEY}`,
        'Content-Type': 'application/json',
    },
});

module.exports = cashinpayApi;
