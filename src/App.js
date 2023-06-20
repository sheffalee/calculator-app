import React from 'react';
import Calculator from './component/Calculator';
import './App.css';
import './component/Calculator.css';

const App = () => {
  return (
    <div className="app">
      <h1>Calculator App</h1>
      <Calculator />
    </div>
  );
};

export default App;
