import React, { useContext } from 'react';
import { userContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

const ProjectList = (props) => {
    const { user } = useContext(userContext);
    const { onClickProp } = props;
    const logoutHandler = (e) => {
        e.preventDefault();
        onClickProp();
    };
    return (
        <div>
            <div>
                <h1>{`Welcome, ${user.userName}`}</h1>
                <button onClick={logoutHandler}>Logout</button>
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
                                    <th>Actions</th>
                                </thead>
                                <tbody>
                                    {user.projects.map((project, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{project.title}</td>
                                                <td>{project.status}</td>
                                                <td>{project.startDate}</td>
                                                <td>{project.endDate}</td>
                                                <td><Link to={`/project-details/${project._id}`}><button>Details</button></Link></td>
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
// 1. add links for each project title to access their information pages