import deleteImg from '../../img/deleteItem.png';

import styles from './TodosItem.module.scss';

type TodoProperties = {
  todo: {
    todoName: string,
    checked: boolean,
  }
  onClickDeleteTodo: (deleteTodosName: string) => void;
  onChangeChecked: (todoName: string) => void;
};

export default function TodosItem({ todo, onClickDeleteTodo, onChangeChecked }: TodoProperties) {
  return (
    <div className={styles.todo}>
      <ul className={styles.todo__block}>
        <input
          onChange={() => onChangeChecked(todo.todoName)}
          checked={todo.checked}
          type="checkBox"
          className={styles.todo__checkBox}
        />
        <p className={!todo.checked ? styles.todo__name : styles.todo__nameDone}>
          {todo.todoName}
        </p>
      </ul>
      <button onClick={() => onClickDeleteTodo(todo.todoName)} type="button" className={styles.todo__deleteBtn}>
        <img src={deleteImg} alt="delete img not found" />
      </button>
    </div>
  );
}
