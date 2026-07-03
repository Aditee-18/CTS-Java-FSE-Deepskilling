import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: "",
      euro: null,
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = () => {
    const inr = parseFloat(this.state.rupees);
    if (!isNaN(inr)) {
      const convertedEuro = (inr / 89).toFixed(2);
      this.setState({ euro: convertedEuro });
    }
  };

  render() {
    return (
      <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px" }}>
        <h2>Currency Convertor (INR to EUR)</h2>
        <div style={{ marginBottom: "10px" }}>
          <label>Indian Rupees: </label>
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleChange}
            placeholder="Enter amount in INR"
            style={{ padding: "6px", marginLeft: "10px" }}
          />
        </div>
        <button onClick={this.handleSubmit} style={{ padding: "8px 16px" }}>
          Convert
        </button>
        {this.state.euro !== null && (
          <h3>
            {this.state.rupees} INR = {this.state.euro} EUR
          </h3>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
