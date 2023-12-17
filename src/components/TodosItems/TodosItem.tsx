import deleteImg from '../../img/deleteItem.png';

import styles from './TodosItem.module.scss';

export default function TodosItem() {
  return (
    <div className={styles.todo}>
      <div className={styles.todo__block}>
        <input type="checkBox" className={styles.todo__checkBox} />
        <p className={styles.todo__name}>
          Hello
        </p>
      </div>
      <button type="button" className={styles.todo__deleteBtn}>
        <img src={deleteImg} alt="delete img not found" />
      </button>
    </div>
  );
}
