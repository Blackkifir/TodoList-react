import Footer from '../components/FooterTodo/Footer';
import Form from '../components/FormTodo/Form';
import Header from '../components/HeaderTodo/Header';

import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main className={styles.main}>
        <Form />
      </main>
      <Footer />
    </div>
  );
}
