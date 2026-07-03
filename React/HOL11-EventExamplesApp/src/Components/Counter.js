import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  showAlert() {
    alert("Hello, Welcome!");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.showAlert();
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px" }}>
        <h2>Counter Component</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment} style={{ marginRight: "10px", padding: "8px 16px" }}>
          Increment
        </button>
        <button onClick={this.decrement} style={{ padding: "8px 16px" }}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
