import React, { useRef } from 'react'
import axios from 'axios'

function Login({setLogged_In,setLoader,setUser}) {
  const Email = useRef()
  const Pass = useRef()

  const onSubmit = ()=>{
    // console.log({
    //   email:Email.current.value,
    //   password:Pass.current.value
    // })

    axios.post('http://localhost:4000/login',{
      email:Email.current.value,
      password:Pass.current.value
    })
    .then(data=>{
      if(data.data!==''){
      // console.log(data)
      setUser(data.data)
      setLogged_In(true)
      setLoader(2)
      }else{
        alert('No user found')
        return;
      }
    })
    .catch(err=>console.log(err))
    // ()=>{


    // }
  }

  return (
    <div className='card'>
      <label>
        Email  :
        <input type='email'
        ref={Email}
        placeholder='Email' /> 
      </label><br/><br/>
      <label>
        Password  :
        <input type='password' 
        ref={Pass}
        placeholder='Password' />
      </label><br /><br/>
      <button
      onClick={onSubmit}
      type='submit'>
        Submit
      </button>
    </div>
  )
}

export default Login