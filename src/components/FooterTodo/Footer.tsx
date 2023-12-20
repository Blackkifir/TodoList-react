import type { Todo } from '../../layout/Home';

import styles from './Footer.module.scss';

type FooterProps = {
  todos: Todo[];
};

export default function Footer({ todos }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__flex}>
        <p className={styles.footer__flex__calc}>
          All your items:
          {' '}
          <b>
            {todos.length}
          </b>
        </p>
      </div>
    </footer>
  );
}
