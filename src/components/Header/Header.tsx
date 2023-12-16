import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__flex}>
        <nav className={styles.nav}>
          <h1 className={styles.header__title}>Todo List</h1>
        </nav>
      </div>
    </header>
  );
}
