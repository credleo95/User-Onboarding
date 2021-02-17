import { useState, useEffect, React } from 'react'; 
import Form from './Components/Form';
import './App.css';
import Schema from './Components/Schema';
import * as yup from 'yup';


const startingForm = {
  name: '',
  email: '',
  password: '',
  agree: false
}
const formErrors = {
  name: '',
  email: '',
  password: '',
  agree: ''
}
function App() {
  const [form, setForm] = useState(startingForm)
  const [disabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState(formErrors)
  const checkFormErrors = (name, value) => {
    yup.reach(Schema, name).validate(value)
    .then(() => setErrors({...errors, [name]: ''}))
    .catch((error) => setErrors({...errors,[name]: error.errors[0]}))
  }

  useEffect(()=>{
    Schema.isValid(form).then(valid => setDisabled(!valid))
  },[form])

  return (
    <div className="App">
      <Form form={form} setForm={setForm} disabled={disabled} checkFormErrors={checkFormErrors} setErrors={setErrors}/>
    </div>
  );
}

export default App;
