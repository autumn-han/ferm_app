import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [ user, setUser ] = useState({});
    const [ userName, setUserName ] = useState("");
    const [ passWord, setPassWord ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const navigate = useNavigate();
    const registerUser = (newUser) => {
        axios.post('http://localhost:8000/api/user/register', newUser, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => console.log('Unable to process POST request for registration'));
    };
    const loginUser = (currentUser) => {
        axios.post('http://localhost:8000/api/user/login', currentUser, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => console.log('Unable to process POST request for logging in'));
    };
    const registerHandler = (e) => {
        e.preventDefault();
        registerUser({ userName, passWord });
        navigate('/');
    };
    const loginHandler = (e) => {
        e.preventDefault();
        loginUser({ userName, passWord });
        navigate(`/fermentation-journal/user/${user._id}`);
    };
    return (
        <div>
            <div>
                <h1>Fermentation Tracker</h1>
            </div>
            <div>
                <div>
                    <h2>Already a Brewer?</h2>
                    <form onSubmit={loginHandler}>
                        <h3>Login Here:</h3>
                        <div>
                            <label>username:</label>
                            <input type='text' />
                        </div>
                        <div>
                            <label>password:</label>
                            <input type='text' />
                        </div>
                        <button>Login</button>
                    </form>
                </div>
                <div>
                    <h2>Ready to Start?</h2>
                    <form onSubmit={registerHandler}>
                        <h3>Sign Up Here:</h3>
                        <div>
                            <label>username:</label>
                            <input value={userName} type='text' onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div>
                            <label>password:</label>
                            <input value={passWord} type='password' onChange={(e) => setPassWord(e.target.value)} />
                        </div>
                        <div>
                            <label>confirm password:</label>
                            <input value={confirmPassword} type='password' onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

// error with trying to register a user -> seems to be an issue with CORS and authorization
// to prompt the exact error, try registering a new user