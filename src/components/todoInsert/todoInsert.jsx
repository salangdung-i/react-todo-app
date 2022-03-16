import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styles from '../todoInsert/todoInsert.module.css';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onSubmit = useCallback((e) => {
    onInsert(value);
    setValue('');
    e.preventDefault();
  }, [onInsert, value]);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <div>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          className={styles.input}
          value={value}
          placeholder="할 일을 입력하세요."
          onChange={onChange}
        />
        <button className={styles.button} type="submit"><MdAdd /></button>
      </form>
    </div>
  );
};


export default TodoInsert;