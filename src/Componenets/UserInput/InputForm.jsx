import { useState } from 'react';
import classes from './InputForm.module.css';

const defaultInput = {
	'user-name': '',
	'user-age': '',
};

const InputForm = (props) => {
	const [userInput, setUserInput] = useState(defaultInput);

	const onChangeHandler = (id, value) => {
		setUserInput((prev) => {
			return { ...prev, [id]: value };
		});
    console.log(value);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		userInput;
		props.onAddinput(userInput);
		console.log(userInput);
	};

	return (
		<>
			<form action="" className={classes.form} onSubmit={onSubmitHandler}>
				<div className={classes['input-container']}>
					<label htmlFor="user-name">Username</label>
					<input
						type="text"
						name="user-name"
						id="user-name"
						onChange={(e) => onChangeHandler('user-name', e.target.value)}
					/>
				</div>
				<div className={classes['input-container']}>
					<label htmlFor="user-age">Age (years)</label>
					<input
						type="text"
						name="user-age"
						id="user-age"
						onChange={(e) => onChangeHandler('user-age', e.target.value)}
					/>
				</div>

				<div>
					<button>Add user</button>
				</div>
			</form>
		</>
	);
};

export default InputForm;
