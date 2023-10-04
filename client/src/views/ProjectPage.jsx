import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { userContext } from '../context/UserContext';
import ProjectDetail from '../components/ProjectDetail';
import ProjectForm from '../components/ProjectForm';

const ProjectPage = () => {
    const { user } = useContext(userContext);
    const { projectID } = useParams();
    const [ project, setProject ] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/project/' + user._id + '/' + projectID, { withCredentials: true })
            .then((res) => {
                setProject({
                    title: res.data.title,
                    startDate: res.data.startDate,
                    endDate: res.data.endDate,
                    status: res.data.status,
                    desc: res.data.desc
                });
                console.log("Successfully retrieved user's project");
            })
            .catch((err) => {
                console.log("Unable to retrieve user's project");
                console.log(err);
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
                console.log(err);
            });
    };
    const createEntry = (entryParam) => {
        axios.patch('http://localhost:8000/api/user/' + user._id, entryParam, { withCredentials: true })
            .then((res) => {
                console.log("Successfully added a log entry");
            })
            .catch((err) => {
                console.log("Unable to make PATCH request for log entry");
            });
    };
    const editProject = (editParam) => {
        axios.patch('http://localhost:8000/api/user/' + user._id, editParam, { withCredentials: true })
            .then((res) => {
                console.log("Successfully edited project details");
            })
            .catch((err) => {
                console.log("Unable to process PATCH request for editing project details");
            });
    };
    return (
        <div>
            <ProjectDetail onSubmitProp={createEntry} onClickProp={logout} project={project} />
            <ProjectForm onSubmitProp={editProject} />
        </div>
    )
};

export default ProjectPage;

// TO-DO:
// 1. using the stored index value of the project, append log entries to the project
// 2. build out a delete project feature
// 3. build out a delete log entry feature
// 4. build out the edit project feature (optional)
// 5. build out the edit log entry feature (optional)
