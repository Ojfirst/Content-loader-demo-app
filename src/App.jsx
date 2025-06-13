import { useState } from 'react';
import InputForm from './Componenets/UserInput/InputForm';
import Result from './Componenets/Result/Result';


const App = () => {
  const [formInput, setFormInput] = useState([]); // Store inputvalue in an array
  
  const formSubmitHandler = (value) => {
    const userInput ={
      ...value, id: Date.now()}; // Add current date for key identity
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
