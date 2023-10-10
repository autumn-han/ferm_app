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
                <Link to={`/project-details/${projectID}`}><button>Return to Project Page</button></Link>
            </div>
            <h2>Need to Edit Your Log Entry?</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='entryDate'>Entry Date</label>
                    <input type='date' name='entryDate' value={entryDate} onChange={(e) => setEntryDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='entryText'>Entry Text</label>
                    <input type='text' name='entryText' value={entryText} onChange={(e) => setEntryText(e.target.value)} />
                </div>
                <button>Submit Changes</button>
            </form>
        </div>
    );
};

export default EditEntry;