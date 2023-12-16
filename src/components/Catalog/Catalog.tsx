/* eslint-disable max-len */
import styles from './Catalog.module.scss';

export default function Catalog() {
  return (
    <div className={styles.catalog}>
      <div className={styles.catalogTodos}>
        <div className={styles.catalogTodos__flex}>
          <img
            className={styles.catalogTodos__flex__avatar}
            src="https://picsum.photos/800"
            alt="not-found avatar"
          />
          <div className={styles.info}>
            <p className={styles.info__name}>
              <span className={styles.info__name__item}>name: </span>
              Mike
            </p>
            <div className={styles.info__block}>
              <p className={styles.info__role}>
                <span className={styles.info__role__item}>role: </span>
                Soft Enginner
              </p>
              <p className={styles.info__email}>
                <span className={styles.info__email__item}>email: </span>
                john@mail.com
              </p>
            </div>
          </div>
        </div>
        <div className={styles.info__bottom}>
          <p className={styles.info__date}>Create: 2023-12-15T06:55:00.000Z</p>
          <p className={styles.info__date}>update:2023-12-15T06:55:00.000Z</p>
        </div>
        <button
          type="button"
          className={styles.catalogTodos__deleteTodo}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
