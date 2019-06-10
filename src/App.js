import React from 'react';
import logo from './logo.svg';
import './App.css';


const goofy_func = (a, b) => {
  return a + b;
}

function App() {
  const cool_string = "Sockets ROCK!!!!!"

  return (
    <div className="App">
      <header className="App-header">
        <p>{cool_string}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>I added this {goofy_func(5, 7)}</p>
      </header>
      <footer>
        <p>Devin's Cool Geocities Site</p>
      </footer>
    </div>
  );
}

export default App;
