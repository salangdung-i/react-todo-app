import React from 'react';
import styles from '../todoList/todoList.module.css';
import TodoListItem from '../todoListItem/todoListItem';

const TodoList = ({ todos, onRemove, onChecked }) => {
  return (
    <div className={styles.TodoList}>
      {
        todos.map(todo => (
          <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onChecked={onChecked} />
        ))}
    </div>
  );
}

export default TodoList;