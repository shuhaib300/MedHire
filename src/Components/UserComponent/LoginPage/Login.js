import React, {useState} from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux/es/hooks/useSelector'

const Login = () => {
    const navigate=useNavigate()
    const user = useSelector((state) => state.users.data)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleUsername = (e) => {
        setEmail(e.target.value)

    }
    const handlepassword = (e) => {
        setPassword(e.target.value)

    }
    const handleForm = (e) => {
        e.preventDefault()
        console.log(user)
        const foundUser = user.find((user) => user.email === email && user.password === password);
        if (foundUser) {
            navigate('/user-profile/profile', { state: { userEmail: email } });
          } else {
            
            alert('Invalid email or password. Please try again.');
          }

    }
    return (
        <div className='container-login-user'>
            <div className='login-box-user'>
                <div className='login-heading-user'>
                    <h1 className='heading-login-user'>LOGIN</h1>
                </div>
                <form onSubmit={handleForm}>
                    <div className='username-input-container-user'>
                        <input className='username-input-box-user' type="email" placeholder='Username'
                            value={email}
                            onChange={handleUsername}/>
                    </div>
                    <div className='username-input-container-user'>
                        <br/>
                        <input className='username-input-box-user' type="password" placeholder='Password'
                            value={password}
                            onChange={handlepassword}/>
                    </div>
                    <div className='username-input-container-user'>
                        <button type='submit' className='button-login-user'>Login</button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Login
