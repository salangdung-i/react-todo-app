import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import styles from '../todoListItem/todoListItem.module.css';


const TodoListItem = ({ todo }) => {
  return (
    <div className={styles.TodoListItem}>
      <div className={styles.checkbox}>
        <MdCheckBoxOutlineBlank className={styles.svg} />
        <div className={styles.text}>{todo.text}</div>
      </div>
      <div className={styles.remove}>
        <MdRemoveCircleOutline />
      </div>
    </div >
  );
}

export default TodoListItem;