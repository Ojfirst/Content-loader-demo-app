import Button from '../UI/Button';
import classes from './Validator.module.css';

const Validator = ({className}) => {
	const warning = {
		title: 'Invalid input',
		message: 'Please enter a valid name and age (none-empty values)',
	};

 

	return (
		<div className={`${classes.container} ${className || ''}`}>
			<h3 className={classes.header}>{warning.title}</h3>
			<p>{warning.message}</p>
      <Button className={classes.button}>Okay</Button>
		</div>
	);
};

export default Validator;
