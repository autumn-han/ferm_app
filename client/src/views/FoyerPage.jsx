import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

const FoyerPage = () => {
    const [ errors, setErrors ] = useState([]);
    const [ errMessage, setErrMessage ] = useState("");
    const navigate = useNavigate();
    const registerUser = (userParam) => {
        axios.post('http://localhost:8000/api/user/register', userParam, { withCredentials: true })
            .then((newUser) => {
                console.log(newUser);
                navigate('/dashboard');
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
    const loginUser = (userParam) => {
        axios.post('http://localhost:8000/api/user/login', userParam, { withCredentials: true })
            .then((user) => {
                console.log(user);
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log("Unable to process POST login request");
                setErrMessage(err.response.data.msg);
                console.log(errMessage);
            });
    };
    return (
        <div>
            <div>
                <h1>Welcome to Fermentation Tracker</h1>
            </div>
            <div>
                <div>
                    <LoginForm errMessage={errMessage} onSubmitProp={loginUser} />
                </div>
                <div>
                    <RegistrationForm errors={errors} onSubmitProp={registerUser} />
                </div>
            </div>
        </div>
    )
};

export default FoyerPage;