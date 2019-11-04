import React, { Component } from 'react';

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  addNumber = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        You've clicked <b>{this.state.count}</b> times!
        <span className="btn btn-primary" onClick={this.addNumber}>Click me!</span>
      </div>
    );
  }
}

export default CounterComponent;
