import React, { Fragment } from 'react';
import './App.css';

// components
import InputTodo from './Components/InputTodo';
import ListTodos from './Components/ListTodos';

function App() {
  return <Fragment>
    <InputTodo />
    <ListTodos />
  </Fragment>;
}

export default App;
