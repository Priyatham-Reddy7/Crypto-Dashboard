import React, {useState} from 'react';
import ExchangeRate from './ExchangeRate';
import axios from 'axios';

function CurrencyConverter() {
    //?states
    const currencies =['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('');
    const [amount, setAmount] = useState('');
    const [exchangeRate, setExchangeRate] = useState('0');
    const [result, setResult ] = useState('');
    const [primaryCurrencyExchanged, setPrimaryCurrencyExchanged]= useState('BTC')
    const [secondaryCurrencyExchanged, setSecondaryCurrencyExchanged]= useState('BTC')

    //?functions
    const convert = ()=>{

const options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {from_currency: chosenPrimaryCurrency , function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
  headers: {
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
  }
};

axios.request(options).then(function (response) {
	console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
    setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
    setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount);
    setPrimaryCurrencyExchanged(chosenPrimaryCurrency)
    setSecondaryCurrencyExchanged(chosenSecondaryCurrency)
}).catch(function (error) {
	console.error(error);
});
}


    return (
        <div className="currency-converter">
            <h2 className="currencyh2">Currency Converter</h2>
            <div className="input-box">
                <table>
                <tbody>
                    <tr>
                        <td><h3>Primary currency:</h3></td>
                        <td>
                            <input 
                             type="number"
                             name="currency-amount-1"
                             value={amount}
                             placeholder="Enter the amount..."
                             onChange={(e)=> setAmount(e.target.value)} />
                        </td>
                        <td>
                            <select  className="currency-option" 
                            name="currency-option-1"
                            value={chosenPrimaryCurrency}
                            
                            onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                            >{currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td><h3>Secondary currency:</h3></td>
                        <td>
                            <input type="number"
                             name="currency-amount-2"
                             placeholder="Result.."
                              value={result}
                               />
                        </td>
                        <td>
                            <select  className="currency-option"
                             name="currency-option-2"
                             value={chosenSecondaryCurrency}
                             onChange={(e)=> setChosenSecondaryCurrency(e.target.value)}
                                >{currencies.map((currency, _index) =>(<option key={_index}>{currency}</option>))}
                            </select>
                        </td>
                    </tr>

                </tbody>
            </table>
            <button id="convert-button" onClick={convert}>Convert</button>

            </div>
            

            <ExchangeRate 
                exchangeRate = {exchangeRate}
                chosenPrimaryCurrency = {primaryCurrencyExchanged}
                chosenSecondaryCurrency = {secondaryCurrencyExchanged}
            />
        </div>
    )
}

export default CurrencyConverter
