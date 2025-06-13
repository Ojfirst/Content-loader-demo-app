import classes from './Card.module.css';

const Card = (props) => {
	const container = classes.container;

	return <div className={`${container} ${props.className}`} >{props.children}</div>;
};

export default Card;
