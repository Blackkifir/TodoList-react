import TodosItem from '../TodosItems/TodosItem';

import type { ChangeEvent, FormEvent } from 'react';
import type { Todo } from '../../layout/Home';

import styles from './Form.module.scss';

type TaskManager = {
  todos: Todo[],
  isComplete: boolean,
  inputValue: string,
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSubmit: (event: FormEvent) => void;
  onClickAddTodo: () => void;
  onClickDeleteTodo: (deleteTodosName: string) => void;
  onChangeChecked: (todoName: string) => void;
};

export default function Form({
  todos,
  isComplete,
  inputValue,
  onChangeInput,
  onChangeSubmit,
  onClickAddTodo,
  onClickDeleteTodo,
  onChangeChecked,
}: TaskManager) {
  return (
    <section className={styles.form}>
      <div className={styles.container}>
        <form onSubmit={onChangeSubmit} className={styles.formTodo}>
          <h1 className={styles.formTodo__title}>Your Tasks</h1>
          <div className={styles.formTodo__block}>
            <input
              name="todoAddItem"
              value={inputValue}
              onChange={onChangeInput}
              className={styles.formTodo__block__input}
              placeholder="add item..."
            />
            <button
              onClick={onClickAddTodo}
              type="button"
              className={styles.formTodo__addBtn}
            >
              {isComplete ? '✔' : 'add'}
            </button>
            <p className={styles.formTodo__toDo}>TO DO</p>
            {todos.map((todo) => (
              <TodosItem
                key={todo.id}
                onChangeChecked={onChangeChecked}
                onClickDeleteTodo={onClickDeleteTodo}
                todo={todo}
              />
            ))}

            {todos.length === 0 && <p className={styles.noTasks}>You have no tasks</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
