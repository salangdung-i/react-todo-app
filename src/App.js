import React from 'react';
import TodoInsert from './components/todoInsert/todoInsert';
import TodoList from './components/todoList/todoList';
import TodoTemplate from './components/todoTemplate/todoTemplate';
import styles from './App.module.css'

const App = () => {
  return (
    <TodoTemplate >
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );

};

/* #002171 */
/* #6d6d6d */
export default App;