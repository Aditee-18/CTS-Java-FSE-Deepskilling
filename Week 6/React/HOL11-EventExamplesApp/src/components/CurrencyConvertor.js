import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const rates = {
    EUR: 0.92,
    INR: 83.15,
    GBP: 0.79
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount);
    if (!isNaN(numericAmount)) {
      const result = (numericAmount * rates[currency]).toFixed(2);
      setConvertedAmount(`${result} ${currency}`);
    } else {
      setConvertedAmount('Invalid input amount');
    }
  };

  return (
    <div className="card">
      <h2>Currency Convertor (USD)</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <div>
          <label>Amount in USD: </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter USD amount"
            required
          />
        </div>
        <div>
          <label>Convert To: </label>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="EUR">Euro (EUR)</option>
            <option value="INR">Indian Rupee (INR)</option>
            <option value="GBP">British Pound (GBP)</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">Convert</button>
      </form>
      {convertedAmount !== null && (
        <p className="conversion-result">Converted Amount: {convertedAmount}</p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
