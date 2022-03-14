import React from 'react';
import { MdAdd } from 'react-icons/md';
import styles from '../todoInsert/todoInsert.module.css';

const TodoInsert = () => {

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
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

export default TodoInsert;