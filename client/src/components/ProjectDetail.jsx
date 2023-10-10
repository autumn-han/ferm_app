import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectDetail = (props) => {
    const { onSubmitProp, logout, deleteProject, deleteLog, projectID, project, logEntries } = props;
    const [ entryDate, setEntryDate ] = useState("");
    const [ entryText, setEntryText ] = useState("");
    const logoutHandler = (e) => {
        e.preventDefault();
        logout();
    };
    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ entryDate, entryText });
        setEntryDate("");
        setEntryText("");
    };
    const deleteProjectHandler = (e) => {
        e.preventDefault();
        deleteProject();
    };
    return (
        <div className='p-3'>
            <div>
                <button className='btn btn-danger m-3' onClick={logoutHandler}>Logout</button>
                <Link to={'/dashboard'}><button className='btn btn-primary'>Back to the Beer Hall</button></Link>
            </div>
            {/* project details */}
                <div className='border rounded p-3'>
                    <h1>{project.title}</h1>
                    <p>Start Date: {project.startDate}</p>
                    <p>End Date: {project.endDate}</p>
                    <p>Status: {project.status}</p>
                    <p>Description: {project.desc}</p>
                    <button className='btn btn-danger' onClick={deleteProjectHandler}>Delete Project</button>
                    <p>Log Entries: </p>
                    <div>
                        {logEntries.length > 0 &&
                            <table className='table table-striped'>
                                <thead>
                                    <th>Entry Date</th>
                                    <th>Notes</th>
                                </thead>
                                <tbody>
                                    {logEntries.map((logEntry, index) => 
                                        (
                                            <tr key={index}>
                                                <td>{logEntry.entryDate}</td>
                                                <td>{logEntry.entryText}</td>
                                                <td className='d-flex justify-content-evenly'>
                                                    <button className='btn btn-danger' onClick={(e) => deleteLog(logEntry._id)}>Delete Entry</button>
                                                    <Link to={`/logEntry/edit/${projectID}/${logEntry._id}`}><button className='btn btn-warning'>Edit Entry</button></Link>
                                                </td>
                                            </tr>
                                        )
                                        )}
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            {/* log entry form */}
            <div className='mt-3'>                
                <div>
                    <h2>Add a Log Entry</h2>
                    <form className='form w-50' onSubmit={submitHandler}>
                        <div>
                            <label className='form-label' htmlFor='entryDate'>Entry Date:</label>
                            <input className='form-control' type='date' name='entryDate' value={entryDate} onChange={(e) => setEntryDate(e.target.value)} />
                        </div>
                        <div>
                            <label className='form-label' htmlFor='entryText'>Notes:</label>
                            <textarea className='form-control' name='entryText' value={entryText} onChange={(e) => setEntryText(e.target.value)} />
                        </div>
                        <div>
                            <label className='form-label'>Upload Pictures:</label>
                            <input className='form-control' type='file' />
                            {/* picture upload feature here */}
                        </div>
                        <button className='btn btn-success mt-3'>Add Entry</button>
                    </form>
                </div>             
            </div>
        </div>
    );
};

export default ProjectDetail;
