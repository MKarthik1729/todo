// import axios from 'axios'
import React from 'react'

function AllTodos({todoTask}) {
  // const [todoTask, settodoTask] = useState()
  // console.log('user  :  ',user)

  // axios.post('http://localhost:4000/alltasks',user)
  // .then(data=>{
  //   settodoTask(data.data)

  // })

  

  return (<>
    <div>AllTodos</div>
    {todoTask && todoTask.map(ele=>{
      return<div key={ele.title}>      
      <h5>{ele.title}</h5>
      <p>{ele.description}</p>
      </div>
    })}
    </>)
}

export default AllTodos