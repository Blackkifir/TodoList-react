import { useState } from 'react';

import Footer from '../components/FooterTodo/Footer';
import Form from '../components/FormTodo/Form';
import Header from '../components/HeaderTodo/Header';

import type { ChangeEvent, FormEvent } from 'react';

import styles from './Home.module.scss';

export type Todo = {
  todoName: string,
  checked: boolean,
  id: number,
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodos = (todoName: string) => {
    const newTodos = {
      todoName,
      checked: false,
      id: todos.length + 1,
    };

    setTodos([...todos, newTodos]);
  };

  const [inputValue, setInputValue] = useState<string>('');

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
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Form
          todos={todos}
          inputValue={inputValue}
          onChangeInput={onChangeInput}
          onChangeSubmit={onChangeSubmit}
          onClickAddTodo={onClickAddTodo}
          onClickDeleteTodo={onClickDeleteTodo}
          onChangeChecked={onChangeChecked}
        />
      </main>
      <Footer todos={todos} />
    </div>
  );
}
