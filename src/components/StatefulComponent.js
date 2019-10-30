import React, { Component } from 'react';
import SayHello from './SayHello';

class StatefulComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      personToSayHelloTo: ''
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
        personToSayHelloTo: 'Stefano'
      });
    }, 2000); // Wait 2 seconds to "load"
  }

  render() {
    if (this.state.isLoading) {
      // We don't always have to use HTML - we can print out just text
      return 'Loading...';
    }

    return (
      <div className="card">
        <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            Hello, {this.state.personToSayHelloTo}!
          </h5>
          <p className="card-text">Welcome to the course.</p>
        </div>
      </div>
    );
  }
}

export default StatefulComponent;
