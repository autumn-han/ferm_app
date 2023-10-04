import React, { useState, useContext } from 'react';
import { userContext } from '../context/UserContext';

const ProjectDetail = (props) => {
    const { onSubmitProp } = props;
    const { user } = useContext(userContext);
    const [ entryDate, setEntryDate ] = useState("");
    const [ entryText, setEntryText ] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({});
    };
    return (
        <div>
            {/* header */}
            <div>
                <h1>PROJECT TITLE HERE</h1>
            </div>
            {/* project details */}
            <div>
                <p>Project: {projects[i].title}</p>
                <p>Start Date: {projects[i].startDate}</p>
                <p>End Date: {projects[i].endDate}</p>
                <p>Status: {projects[i].status}</p>
                <p>Description: {projects[i].desc}</p>
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