import React from 'react';
import styles from '../todoList/todoList.module.css';
import TodoListItem from '../todoListItem/todoListItem';

const TodoList = ({ todos }) => {
  return (
    <div className={styles.TodoList}>
      {
        todos.map(todo => (
          <TodoListItem todo={todo} />
        ))}
    </div>
  );
}

export default TodoList;