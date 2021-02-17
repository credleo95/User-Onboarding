import React from 'react'; 
import '../App.css';


export default function Form({form, setForm, disabled}){
  const change = event => {
      const {checked, value, name, type} = event.target
      const checkedValue = type === 'checkbox'? checked : value
      setForm({...form,[name]:checkedValue}) 
  }

    return(
        <div>
            <form className="form-container">
                <label>name
                    <input onChange={change}
                    type="text"
                    value={form.name}
                    name="name"
                    />
                </label>
                <label>email
                    <input onChange={change}
                    type="email"
                    value={form.email}
                    name="email"
                    />
                </label>
                <label>password
                    <input onChange={change}
                    type="text"
                    value={form.password}
                    name="password"
                    />
                </label>
                <label>Have you read the Terms of Service?
                    <input onChange={change}
                    checked={form.agree}
                    type="checkbox"
                    name="agree"
                    /> 
                </label>

                <button disabled={disabled} className="submit">Submit</button>
            </form>
           



        </div>
    )
}