import styles from './Search.module.scss';

export default function Search() {
  return (
    <section className={styles.search}>
      <div className={styles.search__flex}>
        <div className={styles.search__block}>
          <input
            className={styles.search__block__input}
            placeholder="Search..."
          />
          <button
            type="button"
            className={styles.search__block__close}
          >
            &times;
          </button>
        </div>
      </div>
    </section>
  );
}
