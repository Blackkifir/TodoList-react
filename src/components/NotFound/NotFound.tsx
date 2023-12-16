import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div>
      <h3 className={styles.notFoundItem}>По вашему запросу ничего не найдено! 😕</h3>
    </div>
  );
}
