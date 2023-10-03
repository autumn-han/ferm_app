import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { userContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const ProjectPage = () => {
    const { user } = useContext(userContext);
    useEffect(() => {
        axios.get('http://localhost:8000/api/user/' + user._id, { withCredentials: true })
            .then((res) => {
                setUser({ 
                    _id: res.data._id, 
                    userName: res.data.userName, 
                    projects: res.data.projects 
                });
                console.log("Successfully retrieved user's project");
            })
            .catch((err) => {
                console.log("Unable to retrieve user's project");
            });
    });
    const createEntry = (entryParam) => {
        axios.patch('http://localhost:8000/api/user/' + user._id, entryParam, { withCredentials: true })
            .then((res) => {
                console.log("Successfully added a log entry");
            })
            .catch((err) => {
                console.log("Unable to make PATCH request for log entry");
            });
    };
    return (
        <div>
            <ProjectDetail onSubmitProp={createEntry} />
            <ProjectForm />
        </div>
    )
};

export default ProjectPage;