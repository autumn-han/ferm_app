import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/UserContext';
import ProjectList from '../components/ProjectList';
import ProjectForm from '../components/ProjectForm';

const UserPage = () => {
    const { user } = useContext(userContext);
    const navigate = useNavigate();
    const createProject = (newParam) => {
        axios.patch('http://localhost:8000/api/user/' + user._id, newParam) 
            .then((res) => {
                console.log("Successfully added project");
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <ProjectList />
            <ProjectForm onSubmitProp={createProject} />
        </div>
    )
};

export default UserPage;