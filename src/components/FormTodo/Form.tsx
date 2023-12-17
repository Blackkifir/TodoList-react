import TodosItem from '../TodosItems/TodosItem';

import type { IPropsSearch } from './interfaces/IPropsForm';

import styles from './Form.module.scss';

export default function Search({ onChangeInput, inputValue }: IPropsSearch) {
  return (
    <section className={styles.form}>
      <div className={styles.container}>
        <form className={styles.formTodo}>
          <h1 className={styles.formTodo__title}>NOTE TAKER</h1>
          <div className={styles.formTodo__block}>
            <input
              value={inputValue}
              onChange={onChangeInput}
              className={styles.formTodo__block__input}
              placeholder="add item..."
            />
            <button type="button" className={styles.formTodo__addBtn}>+</button>
            <p className={styles.formTodo__toDo}>TO DO</p>
            <TodosItem />
          </div>
        </form>
      </div>
    </section>
  );
}
