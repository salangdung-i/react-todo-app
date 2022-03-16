import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import styles from '../todoListItem/todoListItem.module.css';

const TodoListItem = ({ todo, onRemove, onChecked }) => {
  const { id, text, checked } = todo;


  return (
    <div className={styles.TodoListItem}>
      <div className={styles.checkbox} onClick={() => onChecked(id)}>
        {
          checked ? <MdCheckBox className={styles.svg} /> : <MdCheckBoxOutlineBlank className={styles.svg} />
        }
        <div className={`${styles.text} ${checked ? styles.checked : ''}`} >
          {text}
        </div>
      </div>
      <div className={styles.remove} onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline className={styles.svg} />
      </div>
    </div >
  );
}

export default TodoListItem;