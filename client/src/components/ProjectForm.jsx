import React, { useState, useContext } from 'react';
import { userContext } from '../context/UserContext';

const ProjectForm = (props) => {
    const { onSubmitProp } = props;
    const { user } = useContext(userContext);
    const [ title, setTitle ] = useState("");
    const [ startDate, setStartDate ] = useState("");
    const [ endDate, setEndDate ] = useState("");
    const [ status, setStatus ] = useState("");
    const [ desc, setDesc ] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ projects: [ ...user.projects, { title: title, startDate: startDate, endDate: endDate, status: status, desc: desc }] });
    };
    return (
        <div>
            <h2>Start a New Project</h2>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input type='text' name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="startDate">Start Date: </label>
                        <input type='date' name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="endDate">End Date: </label>
                        <input type='date' name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="status">Status: </label>
                        <select name="status" onChange={(e) => setStatus(e.target.value)} >
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
                    <button>Submit</button>
                </form>
        </div>
    )
};

export default ProjectForm;

