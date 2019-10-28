import React from 'react';

import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import StatefulComponent from './components/StatefulComponent';

function App() {
  return (
    <div className="container">
      <div className="row">
        <FunctionalComponent />
        <ClassComponent />
        <StatefulComponent />
      </div>
    </div>
  );
}

export default App;
