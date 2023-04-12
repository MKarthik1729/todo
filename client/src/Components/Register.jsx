import React, { useRef } from 'react'
import axios from 'axios'


function Register({ setLogged_In, setLoader, setUser}) {
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
      console.log('res',response.data);
      setUser(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
    
    // console.log(RegJson)       
    // setLogged_In(true)
    setLoader(0)
  }
  else{
    alert('password not same')
  }
}
  return (
    <div className='card'>
        <label>
        UserName  :
        <input type='text'
        ref={UserName}
         placeholder='UserName' />
      </label><br /><br />
      <label>
        Email  :
        <input 
        ref={Email}
        type='Email' placeholder='Email' />
      </label><br /><br />
      <label>
        Password  :
        <input 
        ref={Pass}
        type='password' placeholder='Password' />
      </label><br /><br />
      <label>
        Confirm Password  :
        <input 
        ref={ConPass}
        type='password' placeholder='Confirm Password' />
      </label><br /><br />
      <button
        onClick={Registering}
        type='submit'>
        Submit
      </button>
    </div>
  )
}

export default Register