import React, { useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { userContext } from '../context/UserContext';
import EditEntry from '../components/EditEntry';

const EditLogPage = () => {
    const { projectID, logID } = useParams();
    const { user } = useContext(userContext);
    const navigate = useNavigate();
    const editLogEntry = (editParam) => {
        axios.patch('http://localhost:8000/api/editLogEntry/' + user._id + '/' + projectID + '/' + logID, editParam, { withCredentials: true })
            .then((res) => {
                console.log("Successfully edited log entry for the project");
                navigate('/project-details/' + projectID);
            })
            .catch((err) => {
                console.log("Unable to process PATCH request for editing the log entry for the project");
                console.log(user._id, projectID, logID);
                console.log(err);
            });
    };
    return (
        <div>
            <EditEntry onSubmitProp={editLogEntry} projectID={projectID} />
        </div>
    );
};

export default EditLogPage;