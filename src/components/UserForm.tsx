import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { User, mappedPlans, userShema } from '../validations/userSchema';
import style from './UserForm.module.css';
import ButtonSubmit from './buttonSubmit/ButtonSubmit';
import Input from './common/Input';
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
    <form className="form" onSubmit={handleSubmit((data) => console.log(data))}>
      <Input
        id="name"
        label="Name"
        type="tex"
        placeholder="explame: Pedro"
        error={errors['name']}
        {...register('name')}
      />
      <Input
        id="email"
        label="Email"
        placeholder="example:pedro@pedor.com"
        error={errors['email']}
        {...register('email')}
      />

      <Input
        id="password"
        label="Password"
        placeholder="Your password"
        error={errors['password']}
        {...register('password')}
      />
      <Input
        id="confirmPassword"
        label="confirmPassword"
        placeholder="Your password"
        error={errors['confirmPassword']}
        {...register('confirmPassword')}
      />

      <Input
        id="weight"
        label="Weight"
        placeholder="Weight example:55"
        error={errors['weight']}
        {...register('weight')}
      />
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

      <ButtonSubmit label={'send'} />
    </form>
  );
};

export default UserForm;
