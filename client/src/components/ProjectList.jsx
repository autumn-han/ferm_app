import React, { useContext } from 'react';
import { userContext } from '../context/UserContext';

const ProjectList = () => {
    const { user } = useContext(userContext);
    return (
        <div>
            <div>
                <h1>{`Welcome, ${user.userName}`}</h1>
            </div>
            <div>
                <div>
                    <h2>What's Brewing...</h2>
                    <table>
                        <tbody>
                            {user.projects.map((project, index) => (
                                <td key={index}>Project Title: {project.title}</td>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;