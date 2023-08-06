import React from 'react';

const ProjectForm = () => {
    return (
        <div>
            <h2>Start a New Project</h2>
                <form>
                    <div>
                        <label>Title: </label>
                        <input type='text' />
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