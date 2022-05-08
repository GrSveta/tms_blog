import React from 'react';

import './App.css';
import { Input } from './components/inputs/input'
import { Textarea } from './components/Textarea/Textarea'

function App () {
  return (<div className='App'>
    <Input type="Text" className='generalInput__inputForm'  placeholder="Enter Text" ></Input>
    <div className='inputsPasswordMeil'>
    <Input type="Password"  className='generalInput__inputForm' placeholder="Enter Password"></Input>
    <Input type="E-mail" className='generalInput__inputForm' placeholder="Enter E-mail"></Input>
    </div>
    <Textarea placeholder='Enter text' label='Textarea' cols={80} rows={40}></Textarea>
    </div>
  );
};

export default App;
