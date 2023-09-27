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
                        {user.projects.length > 0 &&
                            <table>
                                <thead>
                                    <th>Project</th>
                                    <th>Status</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                </thead>
                                <tbody>
                                    {user.projects.map((project, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{project.title}</td>
                                                <td>{project.status}</td>
                                                <td>{project.startDate}</td>
                                                <td>{project.endDate}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>                                
                        }                        
                </div>
            </div>
        </div>
    );
};

export default ProjectList;

// TO-DOs:
// 1. pass in props for user? For the purpose of displaying live updates of any recently added projects