import styles from './Footer.module.scss';

export default function Header() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__flex}>
        <p className={styles.footer__flex__calc}>
          All items:
          {' '}
          <b>
            3
          </b>
        </p>
      </div>
    </footer>
  );
}
