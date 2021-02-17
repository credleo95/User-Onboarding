import React from 'react'; 
import '../App.css';
import axios from 'axios'; 


export default function Form({form, setForm, disabled, checkFormErrors, startingForm, users, setUsers}){
  //Change Handler
    const change = event => {
      const {checked, value, name, type} = event.target
      const checkedValue = type === 'checkbox'? checked : value
      checkFormErrors(name, checkedValue)
      setForm({...form,[name]:checkedValue}) 
  }

  const submit = event => {
      event.preventDefault()
      const newPerson = {name: form.name.trim(), email: form.email.trim(),password: form.password.trim(), agree: form.agree}
      axios.post(`https://reqres.in/api/users`, newPerson )
      .then((response) => {
          setForm(startingForm) 
          console.log(response.data); 
          setUsers(response.data);
      }) 
      .catch((error) => {
          debugger
      })
  }

    return(
        <div>
            <form className="form-container" onSubmit={submit}>
                <label>Name
                    <input onChange={change}
                    type="text"
                    value={form.name}
                    name="name"
                    />
                </label>
                <label>Email
                    <input onChange={change}
                    type="email"
                    value={form.email}
                    name="email"
                    />
                </label>
                <label>Password
                    <input onChange={change}
                    type="password"
                    value={form.password}
                    name="password"
                    placeholder="Password"
                    />
                </label>
                <label>Do you agree to the Terms of Service?
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