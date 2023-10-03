import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/UserContext';
import ProjectList from '../components/ProjectList';
import ProjectForm from '../components/ProjectForm';

const UserPage = () => {
    const { user, setUser } = useContext(userContext);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/user/' + user._id, { withCredentials: true })
            .then((res) => {
                setUser({ 
                    // use spread operator? 
                    _id: res.data._id, 
                    userName: res.data.userName, 
                    projects: res.data.projects 
                });
                console.log("Successfully retrieved user's projects");
            })
            .catch((err) => {
                console.log("Unable to retrieve user's projects");
            });
    });
    const logout = () => {
        axios.post('http://localhost:8000/api/user/logout', {}, { withCredentials: true })
            .then((res) => {
                console.log("Successfully logged user out");
                navigate('/foyer');
            })
            .catch((err) => {
                console.log("Unable to log user out");
            });
    };
    const createProject = (newParam) => {
        axios.patch('http://localhost:8000/api/user/' + user._id, newParam, { withCredentials: true }) 
            .then((res) => {
                console.log("Successfully added project");
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log("Unable to create project");
            });
    };
    return (
        <div>
            <ProjectList onClickProp={logout} />
            <ProjectForm onSubmitProp={createProject} />
        </div>
    )
};

export default UserPage;

// TO-DO:
// 1. fix createProject function so that projects can be appended to the array without overwriting what is already there
