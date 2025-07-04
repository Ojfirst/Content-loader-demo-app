import classes from './Button.module.css';

// Utility button
const Button = (props) => {
	return (
		<button
			className={`${classes.button} ${props.className || ''}`}
			type={props.type || 'button'}
			onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
