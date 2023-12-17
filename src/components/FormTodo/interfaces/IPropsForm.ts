import type { ChangeEvent } from 'react';

export interface IPropsSearch {
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string,
}
