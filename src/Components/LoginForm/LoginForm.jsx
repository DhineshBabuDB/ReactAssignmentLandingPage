import React from 'react'
import './LoginFile.css'
import { GrLogin } from "react-icons/gr";

const LoginForm = () => {
  return (
    <div className='LoginForm'>
        <form action="">
            <div className='userInputs'>
                <label htmlFor="userName">User ID</label>
                <input type="text" id='userName' placeholder='Ex: executer@mail.com'/>
            </div>
            <div className='userInputs'>
                <label htmlFor="password">Password</label>
                <input type="text" id='password' placeholder='********'/>
            </div>
            <div className='buttoncontainer'>
                <span>Forgot Password? <h4>Click Here</h4></span>
                <button><span>Login</span><GrLogin /></button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm