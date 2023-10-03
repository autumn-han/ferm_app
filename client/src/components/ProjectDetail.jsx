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
            <div>
                <p>PROJECT TITLE HERE</p>
            </div>
            <div>
                <div>
                    <div>
                        <table>
                            <tbody>
                                {/* filter through user projects, this table presents information */}
                            </tbody>
                        </table>
                    </div>
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
                <div>
                    {/* this is where we'll list the projects onto the page */}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;