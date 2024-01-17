// import API_KEY from '../API_KEY';

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: { apiKey: '' }
};

class CurrencyAPI {
    url = 'https://api.apilayer.com/exchangerates_data';

    getRates(options) {
        // const { date, currency } = options;
        // const dateQuery = date || 'latest';

        // return fetch(`${this.url}/${dateQuery}?symbols=${currency}&base=PLN`, requestOptions)
        return fetch(`https://api.apilayer.com/exchangerates_data/latest?base=USD&symbols=EUR,GBP`, requestOptions)
            .then(this.handleErrors)
            .then((resp) => resp.json());
    }

    // eslint-disable-next-line class-methods-use-this
    handleErrors(resp) {
        if (!resp.ok) {
            throw Error('Problem fetching data');
        }

        return resp;
    }
}

export default CurrencyAPI;
