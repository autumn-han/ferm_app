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
                            {}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;