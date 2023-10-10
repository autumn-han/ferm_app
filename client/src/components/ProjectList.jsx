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
                <h1>Welcome to your brew hub, {user.userName}</h1>
                <button className='btn btn-danger mt-3' onClick={logoutHandler}>Logout</button>
            </div>
            <div className='mt-5'>
                <div>
                    <h2>What's Brewing...</h2>                    
                        {user.projects.length > 0 &&
                            <table className='table table-striped'>
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
                                                <td><Link to={`/project-details/${project._id}`}><button className='btn btn-warning'>Details</button></Link></td>
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

