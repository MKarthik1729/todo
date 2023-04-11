// import axios from 'axios'
import React from 'react'

function AllTodos({todoTask}) {
  // const [todoTask, settodoTask] = useState()
  // console.log('user  :  ',user)

  // axios.post('http://localhost:4000/alltasks',user)
  // .then(data=>{
  //   settodoTask(data.data)

  // })

  

  return <div className='card'>
    <h4 style={{paddingLeft:'20px'}}>AllTodos</h4><hr />
    {todoTask && todoTask.map(ele=>{
      return<div key={ele.title}>      
      <h5>{ele.title}</h5>
      <p>{ele.description}</p><hr />
      </div>
    })}
    </div>

}

export default AllTodos