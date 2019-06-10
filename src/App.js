import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';


const goofy_func = (a, b) => {
  return a + b;
}

function App() {
  const cool_string = "Sockets ROCK!!!!!"

  return (
    <div className="App">
      <header className="App-header">
       <Student />
      </header>
      <footer>
        <p>Devin's Cool Geocities Site</p>
      </footer>
    </div>
  );
}

export default App;
