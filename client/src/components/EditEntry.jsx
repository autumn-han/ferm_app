import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EditEntry = (props) => {
    const { onSubmitProp, projectID } = props;
    const [ entryDate, setEntryDate ] = useState("");
    const [ entryText, setEntryText ] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ entryDate, entryText });
    };
    return (
        <div>
            <div>
                <Link to={`/project-details/${projectID}`}><button className='btn btn-primary m-3'>Return to Project Page</button></Link>
            </div>
            <h2>Need to Edit Your Log Entry?</h2>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <label className='form-label' htmlFor='entryDate'>Entry Date</label>
                    <input className='form-control' type='date' name='entryDate' value={entryDate} onChange={(e) => setEntryDate(e.target.value)} />
                </div>
                <div>
                    <label className='form-label' htmlFor='entryText'>Entry Text</label>
                    <textarea className='form-control' name='entryText' value={entryText} onChange={(e) => setEntryText(e.target.value)} />
                </div>
                <button className='btn btn-success mt-3'>Submit Changes</button>
            </form>
        </div>
    );
};

export default EditEntry;