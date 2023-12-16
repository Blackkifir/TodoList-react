import type { IPropsTodosAll } from './IPropsTodosAll';

export interface IPropsTodosArr {
  todos: IPropsTodosAll[],
  isLoading: boolean,
  error: null | Error,
}
