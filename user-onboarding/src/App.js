import { useState, useEffect, React } from 'react'; 
import Form from './Components/Form';
import './App.css';
import Schema from './Components/Schema';
import * as yup from 'yup';

// Empty Form 
const startingForm = {
  name: '',
  email: '',
  password: '',
  agree: false
}
// Form Errors reference 
const formErrors = {
  name: '',
  email: '',
  password: '',
  agree: ''
}
function App() {
  // Initialized state 
  const [form, setForm] = useState(startingForm)
  const [disabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState(formErrors)
  const [users, setUsers] = useState([])

  const checkFormErrors = (name, value) => {
    yup.reach(Schema, name).validate(value)
    .then(() => setErrors({...errors, [name]:''}))
    .catch((error) => setErrors({...errors,[name]: error.errors[0]}))
  }

  useEffect(()=>{
    Schema.isValid(form).then(valid => setDisabled(!valid))
  },[form])

  return (
    <div className="App">
      <Form form={form} setForm={setForm} disabled={disabled} checkFormErrors={checkFormErrors} setErrors={setErrors} startingForm={startingForm} setUsers={setUsers}/>
      <div style={{color: 'red'}}> 
      <div>{errors.name}</div><div>{errors.email}</div><div>{errors.password}</div><div>{errors.agree}</div>
      </div>
        <pre>
          Name: {JSON.stringify(users.name)}
          <br/>
          Email: {JSON.stringify(users.email)}
          <br/>
          Password: {JSON.stringify(users.password)}
          <br/>
          Agree: {JSON.stringify(users.agree)}
        </pre>
    </div>
  );
}

export default App;
