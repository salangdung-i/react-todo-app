import React, { useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styles from '../todoInsert/todoInsert.module.css';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(value);
  }

  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="할 일을 입력하세요."
          onChange={onChange}
        />
        <button className={styles.button} type="submit"><MdAdd /></button>
      </form>
    </div>
  );
};
// state -> props로 가는게 좀 어렵당.. ㅎㅎ


export default TodoInsert;