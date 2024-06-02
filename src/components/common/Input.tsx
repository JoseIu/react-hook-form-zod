import React from 'react';
import { FieldError } from 'react-hook-form';
import WarningIcon from '../icons/WarningIcon';
import style from './Input.module.css';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  error: FieldError | undefined;
};
const Input = React.forwardRef(
  ({ label, error, ...inputProps }: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <div className={style.row}>
        <label className={`${style.row__label} ${error ? style.row__error : ''}`} htmlFor={inputProps.id}>
          {label}*
        </label>
        <div className={`${style.row__container} ${error ? style.row__error : ''}`}>
          <input ref={ref} className={style.row__input} autoComplete="off" {...inputProps} />
          {error && <WarningIcon className={style.row__icon} />}
        </div>
        <span className={style.row__message}>{error?.message} </span>
      </div>
    );
  }
);
export default Input;
