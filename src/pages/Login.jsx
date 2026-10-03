import {Link} from "react-router-dom";
import { FiMail,FiLock  } from "react-icons/fi";

function Login(){
    return(
        <div className='auth-page'>
            <div className='auth-container'>

                <div className='auth-header'>
                    <h1>Welcome Back</h1>
                    <p>Login to manage your expense</p>
                </div>
                <form>
                    <div className='input-group'>
                        <label>Email</label>
                        <div className='input-box'>
                            <FiMail/>
                            <input type='email' placeholder='Enter your email'/>
                        </div>
                    </div>
                    <div className='input-group'>
                        <label>Password</label>
                        <div className='input-box'>
                            <FiLock/>
                            <input type='password' placeholder='Enter your password'/>
                        </div>
                    </div>
                    <button type='submit' className='auth-btn'>Login</button>
                </form>
                <p className='auth-footer'>Don't have an account? <Link to='/register'>Create one</Link></p>
            </div>
        </div>
    )
}
export default Login;