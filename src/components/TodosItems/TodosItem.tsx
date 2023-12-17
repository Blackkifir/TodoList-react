import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import deleteImg from '../../img/deleteItem.png';
import { setIsDone } from '../../redux/todoSlice';

import type { RootState } from '../../redux/store';

import styles from './TodosItem.module.scss';

export default function TodosItem() {
  const dispatch = useDispatch();
  const { isDone } = useSelector((state: RootState) => state.todoSlice);
  const ref = useRef<HTMLInputElement | null>(null);

  const onChangeCheckBox = () => {
    dispatch(setIsDone(!isDone));
  };

  return (
    <div className={styles.todo}>
      <div className={styles.todo__block}>
        <input
          onChange={onChangeCheckBox}
          type="checkBox"
          className={styles.todo__checkBox}
          checked={isDone}
          ref={ref}
        />
        <p className={!isDone ? styles.todo__name : styles.todo__nameDone}>
          Hello
        </p>
      </div>
      <button type="button" className={styles.todo__deleteBtn}>
        <img src={deleteImg} alt="delete img not found" />
      </button>
    </div>
  );
}
