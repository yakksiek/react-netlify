const fetch = require('node-fetch');
require('dotenv').config()

// const dataRates = {
//     success: true,
//     timestamp: 1705494843,
//     base: 'EUR',
//     date: '2024-01-17',
//     rates: {
//         USD: 1.087459,
//         PLN: 4.395905,
//         GBP: 0.857483,
//     },
// };

const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.API_KEY}&base=EUR&symbols=USD,PLN,GBP`;

exports.handler = async () => {
    return await fetch(url)
        .then(resp => resp.json())
        .then(data => {
            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            };
        });

    // return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(dataRates) };
};
