import classes from './InputForm.module.css';

const InputForm = () => {
	return (
		<>
			<form action="" className={classes.form}>
				<div className={classes['input-container']}>
					<label htmlFor="user-name">Username</label>
					<input type="text" name="user-name" id="user-name" />
				</div>
				<div className={classes['input-container']}>
					<label htmlFor="user-age">Age (years)</label>
					<input type="text" name="user-age" id="user-age" />
				</div>

				<div>
					<button>Add user</button>
				</div>
			</form>
		</>
	);
};

export default InputForm;
