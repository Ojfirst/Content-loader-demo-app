import { useState } from 'react';
import InputForm from './Componenets/UserInput/InputForm';
import Result from './Componenets/Result/Result';
import Card from './Componenets/UI/Card';

const App = () => {
  const [formInput, setFormInput] = useState([]); // All all input in an array
  
  const formSubmitHandler = (value) => {
    const userInput ={
      ...value, id: Date.now()}; // Adding current date to the input
    setFormInput((prevInputs)=> [userInput, ...prevInputs]); // Add new input to the array
  };

	return (
		<>
			<InputForm onAddinput={formSubmitHandler}/>
      <Result processedData={formInput}/>
		</>
	);
};

export default App;
