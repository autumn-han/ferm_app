import React from 'react';
import axios from 'axios';

const ProjectPage = () => {
    return (
        <div>
            <div>
                <h1>PROJECT TITLE</h1>
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
                        <form>
                            <div>
                                <label>Entry Date:</label>
                                <input type='date' />
                            </div>
                            <div>
                                <label>Notes:</label>
                                <input type='textarea' />
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

export default ProjectPage;
// consider making ProjectPage child comp of UserPage, and UserPage child comp of Login - to carry user information over