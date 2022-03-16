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
      check: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      check: false,
    },
    {
      id: 3,
      text: '일정관리 앱 만들어보기',
      check: true,
    }
  ]);


  const onInsert = (value) => {
    setTodos(
      ...todos,
      {
        id: index + 1,
        text: value,
        check: false
      }
    );
  };

  return (
    <TodoTemplate >
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );

};

/* #002171 */
/* #6d6d6d */
export default App;