import Button from '../UI/Button';
import classes from './Validator.module.css';
import Card from '../UI/Card';

const Validator = (props) => {

	return (
		<div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button className={classes.button} onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
	);
};

export default Validator;



