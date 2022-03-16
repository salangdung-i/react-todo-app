import React from 'react';
import styles from '../todoTemplate/todoTemplate.module.css';

const TodoTemplate = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.title}>일정 관리</div>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}

export default TodoTemplate;