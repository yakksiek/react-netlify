import './App.css';
import { useEffect, useState } from 'react';
import CurrencyAPI from './currencyProvider';

const api = new CurrencyAPI();

async function getRates() {
    const rates = await fetch('/api/getRates').then(resp => resp.json());

    return rates;
}

function App() {
    const [dataRates, setDataRates] = useState([]);

    useEffect(() => {
        // api.getRates().then(data => setRates(data));
        getRates().then(data => {
            setDataRates(data);
        });
    }, []);

    console.log(dataRates.rates);

    if (dataRates.length === 0) return <h1>Loading...</h1>;

    return (
        <div className='App'>
            <h2>List</h2>
            <ul>
                {Object.keys(dataRates.rates).map(item => (
                    <li key={item}>
                        {item}: {dataRates.rates[item]}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
