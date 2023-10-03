import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/UserContext';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

const FoyerPage = () => {
    const [ errors, setErrors ] = useState([]);
    const [ errMessage, setErrMessage ] = useState("");
    const navigate = useNavigate();
    const { user, setUser } = useContext(userContext);
    const registerUser = (userParam) => {
        axios.post('http://localhost:8000/api/user/register', userParam, { withCredentials: true })
            .then((res) => {
                setUser({ 
                    _id: res.data.newUser._id,
                    userName: res.data.newUser.userName,
                    projects: res.data.newUser.projects 
                })
                console.log("Successfully processed POST registration request");
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log("Unable to process POST registration request");
                if (err.response.data.errors) {
                    const errorResponse = err.response.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                    setErrMessage(err.response.data.msg);
                }
                else {
                    setErrMessage(err.response.data.msg);
                };                
            });
    };
    const loginUser = (userParam) => {
        axios.post('http://localhost:8000/api/user/login', userParam, { withCredentials: true })
            .then((res) => {
                setUser({ 
                    _id: res.data.user._id,
                    userName: res.data.user.userName,
                    projects: res.data.user.projects 
                })
                console.log("Successfully processed POST login request");
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log("Unable to process POST login request");
                setErrMessage(err.response.data.msg);
                console.log(err);
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
                    <RegistrationForm errMessage={errMessage} errors={errors} onSubmitProp={registerUser} />
                </div>
            </div>
        </div>
    )
};

export default FoyerPage;
