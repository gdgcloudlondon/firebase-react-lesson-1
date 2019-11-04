import React from 'react';

/**
 * Use me like this with a string;
 *  <SayHello to="world" />
 *
 * Or like this with a variable;
 *  <SayHello to={variableName} />
 *
 * Remember to import me!
 *  import SayHello from './SayHello';
 */
const SayHello = (props) => {
  const personToSayHelloTo = props.to;

  return (
    <div className="card">
      <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          Hello, {personToSayHelloTo}!
        </h5>
        <p className="card-text">Welcome to the course.</p>
      </div>
    </div>
  );
}

export default SayHello;
