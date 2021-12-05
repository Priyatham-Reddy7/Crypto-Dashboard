import './App.css';
import Newsfeed from './components/Newsfeed';
import CurrencyConverter from './components/CurrencyConverter';
import ExchangeRate from './components/ExchangeRate';

function App() {
  return (
    <div className="app">
    <h1 className="title">Crypto Dashboard</h1>
    <div className="app-wrapper">
      <CurrencyConverter />
      <Newsfeed />
    </div>
     
    </div>
  );
}

export default App;
