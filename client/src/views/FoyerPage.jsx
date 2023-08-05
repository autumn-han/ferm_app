import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

const FoyerPage = () => {
    const [ errors, setErrors ] = useState([]);
    const navigate = useNavigate();
    const registerUser = (userParam) => {
        axios.post('http://localhost:8000/api/user/register', userParam, { withCredentials: true })
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
    }
    return (
        <div>
            <div>
                <h1>Welcome to Fermentation Tracker</h1>
            </div>
            <div>
                <div>
                    <LoginForm />
                </div>
                <div>
                    <RegistrationForm errors={errors} onSubmitProp={registerUser} />
                </div>
            </div>
        </div>
    )
};

export default FoyerPage;