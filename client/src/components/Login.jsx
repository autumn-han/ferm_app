import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [ user, setUser ] = useState({});
    const createUser = (newUser) => {
        axios.post('http://localhost:8000/api/users', newUser)
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => console.log('Unable to process POST request'));
    };
    const registerHandler = (e) => {
        e.preventDefault();
        createUser({ userName, passWord });
    };
    return (
        <div>
            <div>
                <h1>Fermentation Tracker</h1>
            </div>
            <div>
                <div>
                    <h2>Already a Brewer?</h2>
                    <form>
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
                            <input type='text' />
                        </div>
                        <div>
                            <label>password:</label>
                            <input type='text' />
                        </div>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;