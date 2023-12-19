import { useState } from 'react';

import TodosItem from '../TodosItems/TodosItem';

import type { ChangeEvent, FormEvent } from 'react';

import styles from './Form.module.scss';

type Todo = {
  todoName: string,
  checked: boolean,
};

export default function Form() {
  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodos = (todoName: string) => {
    const newTodos = {
      todoName,
      checked: false,
    };

    setTodos([...todos, newTodos]);
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onChangeSubmit = (event: FormEvent) => {
    if (inputValue.trim() === '') return;
    event.preventDefault();
    addTodos(inputValue);
    setInputValue('');
  };

  const onClickAddTodo = () => {
    if (inputValue.trim() === '') return;
    addTodos(inputValue);
    setInputValue('');
  };

  const onClickDeleteTodo = (deleteTodosName: string) => {
    setTodos(todos.filter((todo) => todo.todoName !== deleteTodosName));
  };

  const onChangeChecked = (todoName: string) => {
    setTodos(
      (prevTodo) => prevTodo.map(
        (tasks) => (tasks.todoName === todoName ? { ...tasks, checked: !tasks.checked } : tasks),
      ),
    );
  };

  return (
    <section className={styles.form}>
      <div className={styles.container}>
        <form onSubmit={onChangeSubmit} className={styles.formTodo}>
          <h1 className={styles.formTodo__title}>NOTE TAKER</h1>
          <div className={styles.formTodo__block}>
            <input
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
              +
            </button>
            <p className={styles.formTodo__toDo}>TO DO</p>
            {todos.map((todo) => (
              <TodosItem
                onChangeChecked={onChangeChecked}
                onClickDeleteTodo={onClickDeleteTodo}
                todo={todo}
              />
            ))}

            {todos.length === 0 && <p className={styles.noTasks}>You have no tasks...</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
