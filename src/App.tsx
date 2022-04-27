import React from 'react';

import './App.css';
import { Input } from './components/inputs/input'

function App () {
  return (<div className='App'>
    <Input type="Text" className="allInput"  placeholder="Enter Text" ></Input>
    <div className='inputsPasswordMeil'>
    <Input type="Password"  className="allInput" placeholder="Enter Password"></Input>
    <Input type="E-mail" className="allInput" placeholder="Enter E-mail"></Input>
    </div>
    </div>
  );
};

export default App;
