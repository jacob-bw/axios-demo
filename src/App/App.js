import React from 'react';
import './App.scss';

// import getTestWord from '../helpers/data/wordData';
import testCall2 from '../helpers/data/wordData2';

// getTestWord.testGetWord().then(console.log);
testCall2.testCall2().then(console.log);

function App() {
  return (
    <div className="App">
      <button className="btn btn-danger">Bootstrap Button</button>
    </div>
  );
}

export default App;
