import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import styles from '../todoListItem/todoListItem.module.css';


const TodoListItem = ({ todo }) => {
  const checkbox = todo.check ? 'check' : '';
  return (
    <div>
      <div className={`styles.box ${checkbox}`}>

      </div>



      {todo.text}
      <MdRemoveCircleOutline />
    </div>

  );
}

export default TodoListItem;