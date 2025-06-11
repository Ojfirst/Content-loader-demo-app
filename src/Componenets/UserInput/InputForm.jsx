import { useState } from 'react';
import classes from './InputForm.module.css';
import Card from '../UI/Card';

const defaultInput = {
	name: '',
	age: '',
};

const InputForm = (props) => {
	const [userInput, setUserInput] = useState(defaultInput);
  // const [isValid, setIsValid] = useState(true);

	const onChangeHandler = (id, value) => {
		setUserInput((prev) => {
			return { ...prev, [id]: value };
		});
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		userInput;
		props.onAddinput(userInput);

    setUserInput(defaultInput);
	};

	return (
	
    <Card>
			<form action="" onSubmit={onSubmitHandler}>
				<div className={classes['input-container']}>
					<label htmlFor="user-name">Username</label>
					<input
						type="text"
						name="user-name"
						id="name"
            value={userInput.name}
						onChange={(e) => onChangeHandler('name', e.target.value)}
					/>
				</div>
				<div className={classes['input-container']}>
					<label htmlFor="user-age">Age (years)</label>
					<input
						type="text"
						name="user-age"
						id="age"
            value={userInput.age}
						onChange={(e) => onChangeHandler('age', e.target.value)}
					/>
				</div>

				<div>
					<button>Add user</button>
				</div>
			</form>
		</Card>
	);
};

export default InputForm;
