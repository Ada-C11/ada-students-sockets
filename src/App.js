import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentCollection from
  './components/StudentCollection';

import Student from './components/Student';

const students = [
  {
    fullName: 'Devin Helmgren',
    email: 'devin@dontemailme.org',
  },
  {
    fullName: 'Dee',
    email: 'dee@dee.com',
  },
  {
    fullName: 'Ada Lovelace',
    email: 'ada@adadev.org',
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StudentCollection
          students={students}
          num={5}
        />

      </header>
      <footer>
        <p>Devin's Cool Geocities Site</p>
      </footer>
    </div>
  );
}

export default App;
