import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/UserContext';

const ProjectDetail = (props) => {
    const { onSubmitProp, logout, deleteProject, project, logEntries } = props;
    const { user } = useContext(userContext);
    const [ entryDate, setEntryDate ] = useState("");
    const [ entryText, setEntryText ] = useState("");
    const logoutHandler = (e) => {
        e.preventDefault();
        logout();
    };
    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ 
            entryDate: entryDate, 
            entryText: entryText 
        });
    };
    const deleteHandler = (e) => {
        e.preventDefault();
        deleteProject();
    };
    return (
        <div>
            <div>
            <button onClick={logoutHandler}>Logout</button>
                <Link to={'/dashboard'}><button>Back to the Beer Hall</button></Link>
                <h1>{project.title}</h1>
                <button onClick={deleteHandler}>Delete Project</button>
            </div>
            {/* project details */}
                <div>
                    <p>Start Date: {project.startDate}</p>
                    <p>End Date: {project.endDate}</p>
                    <p>Status: {project.status}</p>
                    <p>Description: {project.desc}</p>
                    <p>Log Entries</p>
                    <div>
                        {logEntries.length > 0 &&
                            <table>
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
                                            </tr>
                                        )
                                        )}
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            {/* log entry form */}
            <div>                
                <div>
                    <h2>Make an Entry</h2>
                    <form onSubmit={submitHandler}>
                        <div>
                            <label htmlFor='entryDate'>Entry Date:</label>
                            <input type='date' name='entryDate' value={entryDate} onChange={(e) => setEntryDate(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor='entryText'>Notes:</label>
                            <input type='textarea' name='entryText' value={entryText} onChange={(e) => setEntryText(e.target.value)} />
                        </div>
                        <div>
                            <label>Upload Pictures:</label>
                            {/* picture upload feature here */}
                        </div>
                        <button>Add Entry</button>
                    </form>
                </div>             
            </div>
        </div>
    );
};

export default ProjectDetail;

// TO-DO:
// 1. add delete project button
// 2. add delete log entry button