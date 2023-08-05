import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const [ errors, setErrors ] = useState([]);
    const [ userName, setUsername ] = useState("");
    const [ passWord, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/register', { userName, passWord, confirmPassword }, { withCredentials: true })
            .then((newUser) => {
                console.log(newUser);
                navigate('/');
            })
            .catch((err) => {
                console.log("Unable to process POST registration request");
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    };
    return (
        <div>
            <h2>Ready to Start?</h2>
            <form onSubmit={submitHandler}>
                <div>
                    {errors.map((err, index) => (
                        <p key={index}>{err}</p>
                    ))}
                </div>
                <div>
                    <label htmlFor="userName">Username: </label>
                    <input type="text" name="userName" value={userName} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="passWord">Password: </label>
                    <input type="password" name="passWord" value={passWord} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button>Register</button>
            </form>
        </div>
    )
};

export default RegistrationForm;

