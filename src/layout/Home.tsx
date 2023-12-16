import { useEffect } from 'react';

import Catalog from '../components/Catalog/Catalog';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import { useAppDispatch } from '../redux/hooks/hooksTodos';
import { axiosTodosData } from '../redux/slices/todoSlice';

import styles from './Home.module.scss';

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(axiosTodosData());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <main className={styles.main}>
        <Search />
        <section className={styles.catalog}>
          <Catalog />
        </section>
      </main>
    </div>
  );
}
