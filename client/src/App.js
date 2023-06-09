// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import AllTodos from './Components/AllTodos'
import Login from './Components/Login'
import NewTodo from './Components/NewTodo'
import Register from './Components/Register'
import Img from './Components/Img';

function App() {

  const [Logged_In, setLogged_In] = useState(false)
  const [Loader, setLoader] = useState(0)
  const [user,setUser] = useState()

  const Path = () => {
    switch (Loader) {
      case 0:
        return <Login setLogged_In={setLogged_In} setLoader={setLoader} setUser={setUser}/>
      case 1:
        return <div className='flex'><Register setLogged_In={setLogged_In} setLoader={setLoader} setUser={setUser} /><Img/></div>
      case 2:
        return <AllTodos todoTask={user.todo}/>
      case 3:
        return <NewTodo user={user}  setLoader={setLoader} setUser={setUser} />
      default:
        break;
    }
  }

  return (
    <div>
      <div>
        {(Logged_In) ?
          <div className='flexer'>
            <p
            className='textsupp'
              onClick={() => setLoader(2)}
            >
              Today's tasks
            </p>
            <p
            className='textsupp'

              onClick={() => setLoader(3)}
            >New task</p>
            <p
            className='textsupp'
            onClick={() => {
                setLoader(0)
                setLogged_In(false)
              }}
            >Logout</p>
          </div> :
          <div className='flexer'>
            <p
            className='textsupp'

              onClick={() => setLoader(0)}
            >LogIn</p>
            <p
            className='textsupp'
            onClick={() => setLoader(1)}
            >Register</p>
          </div>}
        <Path />
      </div>
    </div>
  );
}

export default App;
