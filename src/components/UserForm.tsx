import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { User, mappedPlans, userShema } from '../validations/userSchema';
import style from './UserForm.module.css';
import WarningIcon from './icons/WarningIcon';

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(userShema),
  });
  const plansOptions = Object.entries(mappedPlans).map(([key, value]) => (
    <option key={key} className={style.row__option} value={key}>
      {value}
    </option>
  ));
  console.log(errors);
  return (
    <form className={style.form} onSubmit={handleSubmit((data) => console.log(data))}>
      <div className={style.row}>
        <label className={`${style.row__label} ${errors.name ? style.row__error : ''}`} htmlFor="name">
          name*
        </label>
        <div className={`${style.row__container} ${errors.name ? style.row__error : ''}`}>
          <input
            className={style.row__input}
            id="name"
            type="text"
            autoComplete="off"
            placeholder="example: Pedro"
            {...register('name')}
          />
          {errors.name && <WarningIcon className={style.row__icon} />}
        </div>
        <span className={style.row__message}>{errors.name?.message} </span>
      </div>
      <div className={style.row}>
        <label className={`${style.row__label} ${errors.email ? style.row__error : ''}`} htmlFor="email">
          Email
        </label>
        <div className={`${style.row__container} ${errors.email ? style.row__error : ''}`}>
          <input
            className={style.row__input}
            id="email"
            type="email"
            autoComplete="off"
            placeholder="example: Pedro@email.com"
            {...register('email')}
          />
          {errors.email && <WarningIcon className={style.row__icon} />}
        </div>
        <span className={style.row__message}>{errors.email?.message}</span>
      </div>
      <div className={style.row}>
        <label
          className={`${style.row__label} ${errors.password ? style.row__error : ''}`}
          htmlFor="password"
        >
          Password*
        </label>
        <div className={`${style.row__container} ${errors.password ? style.row__error : ''}`}>
          <input
            className={style.row__input}
            id="password"
            type="password"
            autoComplete="off"
            placeholder="your password"
            {...register('password')}
          />
          {errors.password && <WarningIcon className={style.row__icon} />}
        </div>
        <span className={style.row__message}>{errors.password?.message}</span>
      </div>
      <div className={style.row}>
        <label
          className={`${style.row__label} ${errors.confirmPassword ? style.row__error : ''}`}
          htmlFor="name"
        >
          Confirm Password
        </label>
        <div className={`${style.row__container} ${errors.confirmPassword ? style.row__error : ''}`}>
          <input
            className={style.row__input}
            id="confirmPassword"
            type="password"
            autoComplete="off"
            placeholder="your password"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && <WarningIcon className={style.row__icon} />}
        </div>
        <span className={style.row__message}>{errors.confirmPassword?.message}</span>
      </div>
      <div className={style.row}>
        <label className={`${style.row__label} ${errors.weight ? style.row__error : ''}`} htmlFor="name">
          Weight
        </label>
        <div className={`${style.row__container} ${errors.weight ? style.row__error : ''}`}>
          <input
            className={style.row__input}
            id="weight"
            type="text"
            autoComplete="off"
            placeholder="22"
            {...register('weight')}
          />
          {errors.weight && <WarningIcon className={style.row__icon} />}
        </div>
        <span className={style.row__message}>{errors.weight?.message}</span>
      </div>
      <div className={style.row}>
        <label className={`${style.row__label} ${errors.plan ? style.row__error : ''}`} htmlFor="name">
          Plan
        </label>
        <div className={`${style.row__container} ${errors.plan ? style.row__error : ''}`}>
          <select id="plan" className={style.row__input} {...register('plan')}>
            {plansOptions}
          </select>
          {errors.plan && <WarningIcon className={style.row__icon} />}
        </div>
        <span className={style.row__message}>{errors.plan?.message}</span>
      </div>

      <button type="submit" className={style.form__submit}>
        Send
      </button>
    </form>
  );
};

export default UserForm;
