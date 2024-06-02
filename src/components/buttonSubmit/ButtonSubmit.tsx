import style from './ButtonSubmit.module.css';
type ButtonSubmitProps = {
  label: string;
};
const ButtonSubmit = ({ label }: ButtonSubmitProps) => {
  return (
    <button type="submit" className={style.submit}>
      {label}
    </button>
  );
};

export default ButtonSubmit;
