import React from 'react';
import './login.css';
import {useHistory} from 'react-router-dom'

function Login() {
    let history = useHistory();
    return (
        <div className= 'login'>
            <h1>Login</h1>
            <h3 className='login__em' >email</h3>
            <input className='login__email' type='email'/>
            <h3 className='login__pass'>password</h3>
            <input className= 'login__password' type = 'password'/>
            <button onClick={()=> history.push('/app')} type ='submit' className= 'login__button'>submit</button>
        </div>
    )
}

export default Login
