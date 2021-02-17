import { useState, useEffect, React } from 'react'; 
import Form from './Components/Form';
import './App.css';



const startingForm = {
  name: '',
  email: '',
  password: '',
  agree: false
}
function App() {
  const [form, setForm] = useState(startingForm)
  const [disabled, setDisabled] = useState(true)

  return (
    <div className="App">
      <Form form={form} setForm={setForm} disabled={disabled}/>
    </div>
  );
}

export default App;
