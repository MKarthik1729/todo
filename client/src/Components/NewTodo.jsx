import axios from 'axios'
import React, { useRef } from 'react'

function NewTodo({ user, setLoader,setUser}) {
  const title = useRef()
  const des = useRef()
  const onSubmit = () => {

    const checker = (arr) => {
      // console.log(arr,arr.length)
      for (var x=0; x < arr.length; x++) {
        // console.log(x)
        if (arr[x].title === title.current.value) {
          return false
        }
      }
      return true
    }
    if (checker(user.todo)) {
      // console.log('same doesn\'t exist')
      axios.post('http://localhost:4000/addtask', {
        user: user.user,
        todo: {
          title: title.current.value,
          description: des.current.value,
          isDone: false
        }
      })
        .then(data => {
          // console.log(data..acknowledged)
          if (data.data.acknowledged === true) {
            setUser({
              user: user.user,
              todo: [...user.todo,{
                title: title.current.value,
                description: des.current.value,
                isDone: false
              }]
            })
            alert('inserted successfully')
            setLoader(2)
          }
        })
    }
    else {
      alert('already exists')
    }
  }
  return (
    <div>NewTodo
      <label> Title  :
        <input type='text'
          ref={title}
          placeholder='title' />
      </label>
      <label> Description  :
        <input type='text'
          ref={des}
          placeholder='title' />
      </label>
      <button onClick={onSubmit}>add</button>
    </div>
  )
}

export default NewTodo