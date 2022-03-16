import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/todoInsert/todoInsert';
import TodoList from './components/todoList/todoList';
import TodoTemplate from './components/todoTemplate/todoTemplate';
import styles from './App.module.css';

const App = () => {
  const index = useRef(5);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '11시 회의 참석하기 💬',
      checked: true,
    },
    {
      id: 2,
      text: '오후 2시 외부미팅 💼',
      checked: false,
    },
    {
      id: 3,
      text: '저녁 6시 운동하기 💪 ',
      checked: false,
    },
    {
      id: 4,
      text: '저녁 7시 친구들과 치맥하기 🍻',
      checked: false,
    }
  ]);

  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos]);

  const onChecked = useCallback(id => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo));
  }, [todos]);

  const onInsert = useCallback(text => {
    const todo = {
      id: index.current,
      text: text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    index.current += 1;
  }, [todos]);

  return (
    <TodoTemplate >
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onChecked={onChecked} />
    </TodoTemplate>
  );

};

export default App;