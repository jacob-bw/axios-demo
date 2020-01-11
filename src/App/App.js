import React from 'react';
import './App.scss';

import getTestWord from '../helpers/data/wordData';

getTestWord.testGetWord().then(console.log);

function App() {
  return (
    <div className="App">
      <button className="btn btn-danger">Bootstrap Button</button>
    </div>
  );
}

export default App;
