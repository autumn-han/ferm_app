import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/UserContext';
import ProjectList from '../components/ProjectList';
import ProjectForm from '../components/ProjectForm';

const UserPage = () => {
    const { user } = useContext(userContext);
    const navigate = useNavigate();
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
        axios.patch('http://localhost:8000/api/user/' + user._id, newParam) 
            .then((res) => {
                // map form data here?
                console.log("Successfully added project");
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log(err);
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
// 1. add useEffect GET request to show live updates to the user's page after adding a new project under their account
// 2. pass this in as props for ProjectList?