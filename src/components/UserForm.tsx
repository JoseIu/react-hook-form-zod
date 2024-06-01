import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { User, mappedPlans, userShema } from "../validations/userSchema";
import style from "./UserForm.module.css";
import WarningIcon from "./icons/WarningIcon";

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
	return (
		<form onSubmit={handleSubmit((data) => console.log(data))}>
			<div className={style.row}>
				<label className={style.row__label} htmlFor="name">
					name*
				</label>
				<div
					className={
						errors.name ? style.row__containerError : style.row__container
					}
				>
					<input
						className={style.row__input}
						id="name"
						type="text"
						autoComplete="off"
						placeholder="example: Pedro"
						{...register("name")}
					/>
					{errors.name && <WarningIcon className={style.row__icon} />}
				</div>
				<span className={style.row__error}>{errors.name?.message} </span>
			</div>
			<div className={style.row}>
				<label className={style.row__label} htmlFor="name">
					Email
				</label>
				<div className={style.row__container}>
					<input
						className={style.row__input}
						id="email"
						type="email"
						autoComplete="off"
						placeholder="example: Pedro@email.com"
						{...register("email")}
					/>
					<WarningIcon className={style.row__icon} />
				</div>
				<span className={style.row__error}>Campo requerido</span>
			</div>
			<div className={style.row}>
				<label className={style.row__label} htmlFor="name">
					Password
				</label>
				<div className={style.row__container}>
					<input
						className={style.row__input}
						id="password"
						type="password"
						autoComplete="off"
						placeholder="your password"
						{...register("password")}
					/>
					<WarningIcon className={style.row__icon} />
				</div>
				<span className={style.row__error}>Campo requerido</span>
			</div>
			<div className={style.row}>
				<label className={style.row__label} htmlFor="name">
					Confirm Password
				</label>
				<div className={style.row__container}>
					<input
						className={style.row__input}
						id="confirmPassword"
						type="password"
						autoComplete="off"
						placeholder="your password"
						{...register("confirmPassword")}
					/>
					<WarningIcon className={style.row__icon} />
				</div>
				<span className={style.row__error}>Campo requerido</span>
			</div>
			<div className={style.row}>
				<label className={style.row__label} htmlFor="name">
					Weight
				</label>
				<div className={style.row__container}>
					<input
						className={style.row__input}
						id="weight"
						type="number"
						autoComplete="off"
						placeholder="22"
						{...register("weight")}
					/>
					<WarningIcon className={style.row__icon} />
				</div>
				<span className={style.row__error}>Campo requerido</span>
			</div>
			<div className={style.row}>
				<label className={style.row__label} htmlFor="name">
					Plan
				</label>
				<div className={style.row__container}>
					<select id="plan" className={style.row__input} {...register("plan")}>
						{plansOptions}
					</select>
					<WarningIcon className={style.row__icon} />
				</div>
				<span className={style.row__error}>Campo requerido</span>
			</div>

			<button type="submit">Send</button>
		</form>
	);
};

export default UserForm;
