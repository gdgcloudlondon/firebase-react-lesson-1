import React from 'react';

const FunctionalComponent = () => {
  const personToSayHelloTo = 'Amanda';

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

export default FunctionalComponent;
