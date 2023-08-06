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
        onSubmitProp({ title, startDate, endDate, status, desc });
    };
    return (
        <div>
            <h2>Start a New Project</h2>
                <form>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input type='text' name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label>Start-Date: </label>
                        <input type='date' />
                    </div>
                    <div>
                        <label>End-Date: </label>
                        <input type='date' />
                    </div>
                    <div>
                        <label>Status: </label>
                        <select>
                            <option value='Primary'>Primary</option>
                            <option value='Secondary'>Secondary</option>
                            <option value='Aging'>Aging</option>
                            <option value='Complete'>Complete</option>
                        </select>
                    </div>
                    <div>
                        <label>Description: </label>
                        <input type='textarea' />
                    </div>
                    <button>Add Brew Project</button>
                </form>
        </div>
    )
};

export default ProjectForm;