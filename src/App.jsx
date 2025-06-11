import { useState } from 'react';
import InputForm from './Componenets/UserInput/InputForm';
import Result from './Componenets/Result/Result';

const App = () => {
  const [formInput, setFormInput] = useState([]);
  
  const formSubmitHandler = (value) => {
    const userInput ={
      ...value, id: Date.now()}; // Adding current date to the input
    setFormInput((prevInput)=> [userInput, ...prevInput]);
  };

	return (
		<>
			<InputForm onAddinput={formSubmitHandler}/>
      <Result processedData={formInput}/>
		</>
	);
};

export default App;
