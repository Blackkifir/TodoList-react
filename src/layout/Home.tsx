import { useState } from 'react';

import Footer from '../components/FooterTodo/Footer';
import Form from '../components/FormTodo/Form';
import Header from '../components/HeaderTodo/Header';

import type { ChangeEvent } from 'react';

import styles from './Home.module.scss';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="wrapper">
      <Header />
      <main className={styles.main}>
        <Form onChangeInput={onChangeInput} inputValue={inputValue} />
      </main>
      <Footer />
    </div>
  );
}
