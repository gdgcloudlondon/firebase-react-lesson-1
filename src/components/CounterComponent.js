import React, { Component } from 'react';

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  addNumber = () => {
    // Exercise 2
    // How can I add 1 to "count" stored in "this.state"?
  }

  // Exercise 3 code will go here

  render() {
    return (
      <div>
        You've clicked <b>{this.state.count}</b> times
        <span className="btn btn-primary ml-2" onClick={this.addNumber}>
          Click me!
        </span>
      </div>
    );
  }
}

export default CounterComponent;
