import { useState } from 'react';
import InputForm from './Componenets/UserInput/InputForm';
import Result from './Componenets/Result/Result';

const App = () => {
  const [formInput, setFormInput] = useState();
  const formSubmitHandler = (value) => {
    setFormInput(value)
  }

  console.log('This is from app.jsx',formInput)

	return (
		<>
			<InputForm onAddinput={formSubmitHandler}/>
      <Result processedData={formInput}/>
		</>
	);
}

export default App;
