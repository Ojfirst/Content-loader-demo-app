import classes from './Button.module.css'

const Button = ({children, onClick, className}) => {
  return <button className={`${classes.button} ${ className || ''}`} onClick={onClick} >
    {children}
  </button>
}

export default Button;