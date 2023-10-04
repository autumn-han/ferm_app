import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/UserContext';

const ProjectDetail = (props) => {
    const { onSubmitProp, onClickProp, project } = props;
    const { user } = useContext(userContext);
    const [ entryDate, setEntryDate ] = useState("");
    const [ entryText, setEntryText ] = useState("");
    const logoutHandler = (e) => {
        e.preventDefault();
        onClickProp();
    };
    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({});
    };
    return (
        <div>
            <div>
                <h1>{project.title}</h1>
                <button onClick={logoutHandler}>Logout</button>
                <Link to={'/dashboard'}><button>Back to the Beer Hall</button></Link>
            </div>
            {/* project details */}
            
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