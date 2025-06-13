import { useState } from 'react';
import classes from './InputForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Validator from '../Validator/Validator';

const defaultInput = {
	name: '',
	age: '',
};

const InputForm = (props) => {
	const [userInput, setUserInput] = useState(defaultInput);
	const [isValid, setIsValid] = useState();

	const onChangeHandler = (id, value) => {
		if (value.trim().length > 0) {
			setIsValid(true);
		}
		setUserInput((prev) => {
			return { ...prev, [id]: value };
		});
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		if (
			userInput.name.trim().length === 0 ||
			userInput.age.trim().length === 0
		) {
			setIsValid(false);
			return;
		}

    if (+userInput.age < 1) {
      setIsValid(false);
      return;
    }
		props.onAddinput(userInput);

		setUserInput(defaultInput); // Reset/Clear input field
	};

  const onConfirm = () => {

  }

	return (
    <div>
    <Validator title={'An error occure'}  message={'Something went wrong'} />
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
						type="number"
						name="user-age"
						id="age"
						value={userInput.age}
						onChange={(e) => onChangeHandler('age', e.target.value)}
					/>
				</div>
				<Button className={classes.button} type='submit'>Add user</Button>
				<div></div>

        <div className={isValid ? classes.overlay : ''}>
          </div>
			</form>
		</Card>
    </div>
	);
};

export default InputForm;
