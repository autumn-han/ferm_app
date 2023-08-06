import React from 'react';

const ProjectList = (props) => {
    const { user } = props;
    return (
        <div>
            <div>
                <h1>Welcome Back, {user.userName}</h1>
            </div>
            <div>
                <div>
                    <h2>What's Brewing...</h2>
                    <table>
                        <tbody>
                            {/* filter through user projects into <tr> and <td> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;