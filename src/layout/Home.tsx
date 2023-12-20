import { useEffect, useState } from 'react';

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
  const [isComplete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    const storageTodo = localStorage.getItem('todoList');
    if (storageTodo) {
      setTodos(JSON.parse(storageTodo));
    }
  }, []);

  const addTodos = (todoName: string) => {
    const newTodos = {
      todoName,
      checked: false,
      id: todos.length + 1,
    };

    setTodos([...todos, newTodos]);
    localStorage.setItem('todoList', JSON.stringify([...todos, newTodos]));
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
    setComplete(true);
    setTimeout(() => {
      setComplete(false);
    }, 500);
  };

  const onClickAddTodo = () => {
    if (inputValue.trim() === '') return;
    addTodos(inputValue);
    setInputValue('');
    setComplete(true);
    setTimeout(() => {
      setComplete(false);
    }, 500);
  };

  const onClickDeleteTodo = (deleteTodosName: string) => {
    setTodos((prevTodo) => {
      const updatesTodo = prevTodo.filter((todo) => todo.todoName !== deleteTodosName);
      localStorage.setItem('todoList', JSON.stringify(updatesTodo));
      return updatesTodo;
    });
  };

  const onChangeChecked = (todoName: string) => {
    setTodos(
      (prevTodo) => {
        const updatesCheckTodo = prevTodo.map(
          (checks) => (checks.todoName === todoName
            ? { ...checks, checked: !checks.checked } : checks),
        );
        localStorage.setItem('todoList', JSON.stringify(updatesCheckTodo));
        return updatesCheckTodo;
      },
    );
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Form
          todos={todos}
          isComplete={isComplete}
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
