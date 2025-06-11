import Card from "../UI/Card";
import classes from './Validator.module.css';

const Validator = () => {
	const warning = {
		title: 'Invalid input',
		message: 'Please enter a valid name and age (none-empty values)',
	};

	return (
		<div className={classes.container}>
			<h3 className={classes.header}>{warning.title}</h3>
			<p>{warning.message}</p>
		</div>
	);
};

export default Validator;
