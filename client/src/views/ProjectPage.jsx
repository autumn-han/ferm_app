import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { userContext } from '../context/UserContext';
import ProjectDetail from '../components/ProjectDetail';
import ProjectForm from '../components/ProjectForm';

const ProjectPage = () => {
    const { user } = useContext(userContext);
    const { projectID } = useParams();
    const navigate = useNavigate();
    const [ logEntries, setLogEntries ] = useState([]);
    const [ project, setProject ] = useState({});
    useEffect(() => {
            axios.get('http://localhost:8000/api/project/' + user._id + '/' + projectID, { withCredentials: true })
            .then((res) => {
                setProject({
                    title: res.data.title,
                    startDate: res.data.startDate,
                    endDate: res.data.endDate,
                    status: res.data.status,
                    desc: res.data.desc,                    
                });
                setLogEntries(res.data.logEntries);
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
        axios.patch('http://localhost:8000/api/addLogEntry/' + user._id + '/' + projectID, entryParam, { withCredentials: true })
            .then((res) => {
                console.log("Successfully added a log entry");
            })
            .catch((err) => {
                console.log("Unable to make PATCH request for log entry");
                console.log(err);
            });
    };
    const deleteProject = () => {
        axios.patch('http://localhost:8000/api/deleteProject/' + user._id + '/' + projectID, { withCredentials: true })
            .then((res) => {
                console.log("Successfully removed project from user's account");
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log("Unable to process PATCH request for removing a project from user's account");
                console.log(err);
            });
    };
    const deleteLog = (logID) => {
        axios.patch('http://localhost:8000/api/deleteLogEntry/' + user._id + '/' + projectID + '/' + logID, { withCredentials: true })
            .then((res) => {
                console.log("Successfully removed log entry from project");
            })
            .catch((err) => {
                console.log("Unable to process PATCH request for removing a log entry from the project record");
                console.log(err);
            });
    };
    const editProject = (editParam) => {
        axios.patch('http://localhost:8000/api/editProject/' + user._id + '/' + projectID, editParam, { withCredentials: true })
            .then((res) => {
                console.log("Successfully edited project details");
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log("Unable to process PATCH request for editing project details");
                console.log(err);
            });
    };
    return (
        <div className='d-flex container'>
            <div className='m-5 w-75 border rounded'>
                <ProjectDetail onSubmitProp={createEntry} logout={logout} deleteProject={deleteProject} deleteLog={deleteLog} projectID={projectID} project={project} logEntries={logEntries} />
            </div>
            <div className='m-5 w-50'>
                <h2>Need to Update The Status of Your Project?</h2>
                <ProjectForm onSubmitProp={editProject} iTitle={project.title} iStart={project.startDate} iEnd={project.endDate} iStatus={project.status} iDesc={project.desc} />
            </div>
        </div>
    )
};

export default ProjectPage;

// TO-DO:
// 1. fix props for passing in initial values of project properties for ProjectForm
// 2. add bootstrap
