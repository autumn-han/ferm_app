import React, { useState, useContext } from 'react';
import { userContext } from '../context/UserContext';

const EditProject = (props) => {
    const { editProject, project } = props;
    const { user } = useContext(userContext);
    const [ title, setTitle ] = useState("");
    const [ startDate, setStartDate ] = useState("");
    const [ endDate, setEndDate ] = useState("");
    const [ status, setStatus ] = useState("");
    const [ desc, setDesc ] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        editProject({ title, startDate, endDate, status, desc });
    };
    return (
        <div>
            <h2>Need to Edit Your Project?</h2>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input type='text' name="title" value={project.title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="startDate">Start Date: </label>
                        <input type='date' name="startDate" value={project.startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="endDate">End Date: </label>
                        <input type='date' name="endDate" value={project.endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="status">Status: </label>
                        <select name="status" value={project.status} onChange={(e) => setStatus(e.target.value)} >
                            <option value='Primary'>Primary</option>
                            <option value='Secondary'>Secondary</option>
                            <option value='Aging'>Aging</option>
                            <option value='Complete'>Complete</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="desc">Description: </label>
                        <input type='textarea' name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
                    </div>
                    <div>
                        {/* <label>Upload Photo: </label>
                        <input type='file' /> */}
                    </div>
                    <button>Submit Changes</button>
                </form>
        </div>
    )
};

export default EditProject;