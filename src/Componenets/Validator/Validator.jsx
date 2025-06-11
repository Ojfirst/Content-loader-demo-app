import Card from "../UI/Card";

const Validator = () => {
	const warning = {
		title: 'Invalid input',
		message: 'Please enter a valid name and age (none-empty values)',
	};

	return (
		<Card>
			<h3>{warning.title}</h3>
			<p>{warning.message}</p>
		</Card>
	);
};

export default Validator;
