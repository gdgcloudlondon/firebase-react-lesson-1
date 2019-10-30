import React from 'react';

import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import StatefulComponent from './components/StatefulComponent';
import CounterComponent from './components/CounterComponent';

const App = () => {
  const names = [
    'Amanda',
    'Stefano',
    'Duncan',
  ];

  return (
    <div className="container">
      <div className="row">
        <FunctionalComponent />
        <ClassComponent />
        <StatefulComponent />
      </div>
      <CounterComponent />
    </div>
  );
};

export default App;
