import React, { Component } from 'react';
import SayHello from './SayHello';

class StatefulComponent extends Component {
  constructor(props) {
    // If we use a class component, we must call this - I won't explain why here
    // but if you fancy a read here is an article by Dan Abramov - someone who
    // works on the React code https://overreacted.io/why-do-we-write-super-props/
    super(props);

    this.state = {
      isLoading: true,
      personToSayHelloTo: ''
    };
  }

  componentDidMount() {
    // Let's "fake" a 2 second load time before we update the components state
    setTimeout(() => {
      this.setState({
        isLoading: false,
        personToSayHelloTo: 'Stefano'
      });
    }, 2000);
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
