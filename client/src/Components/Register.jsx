import React, { useRef } from 'react'
import axios from 'axios'


function Register({ setLogged_In, setLoader }) {
  const UserName = useRef()
  const Email = useRef()
  const Pass = useRef()
  const ConPass = useRef()

  const Registering= ()=>{
    if(Pass.current.value === ConPass.current.value){
    const RegJson = {
      user:UserName.current.value,
      email:Email.current.value,
      password:Pass.current.value
    }
    axios.post('http://localhost:4000/register', RegJson)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(RegJson)       
    setLogged_In(true)
    setLoader(2)
  }
  else{
    alert('password not same')
  }
}
  return (
    <div>
        <label>
        UserName  :
        <input type='text'
        ref={UserName}
         placeholder='UserName' />
      </label><br />
      <label>
        Email  :
        <input 
        ref={Email}
        type='Email' placeholder='Email' />
      </label><br />
      <label>
        Password  :
        <input 
        ref={Pass}
        type='password' placeholder='Password' />
      </label><br />
      <label>
        Confirm Password  :
        <input 
        ref={ConPass}
        type='password' placeholder='Confirm Password' />
      </label><br />
      <button
        onClick={Registering}
        type='submit'>
        Submit
      </button>
    </div>
  )
}

export default Register