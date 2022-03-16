import React, { useEffect, useRef, useState } from 'react';
import TodoInsert from './components/todoInsert/todoInsert';
import TodoList from './components/todoList/todoList';
import TodoTemplate from './components/todoTemplate/todoTemplate';
import styles from './App.module.css'

const App = () => {
  const index = useRef(4);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: false,
    },
    {
      id: 3,
      text: '일정관리 앱 만들어보기',
      checked: true,
    }
  ]);

  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const onChecked = id => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo));
  }

  const onInsert = text => {
    const todo = {
      id: index.current,
      text: text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    index.current += 1;
  };

  return (
    <TodoTemplate >
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onChecked={onChecked} />
    </TodoTemplate>
  );

};

/* #002171 */
/* #6d6d6d */
export default App;