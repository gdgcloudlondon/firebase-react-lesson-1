import React from 'react';

/**
 * Use me like this with a string;
 *  <FunctionalWithProps personToSayHelloTo="world" />
 *
 * Or like this with a variable;
 *  <FunctionalWithProps personToSayHelloTo={variableName} />
 */
function FunctionalWithProps(props) {
  return (
    <div className="card">
      <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Hello, {props.personToSayHelloTo}!</h5>
        <p className="card-text">Welcome to the course.</p>
      </div>
    </div>
  );
}

export default FunctionalWithProps;
