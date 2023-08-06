import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import ProjectList from '../components/ProjectList';
import { userContext } from '../context/UserContext';

const UserPage = () => {
    const { user, setUser } = useContext(userContext);
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/user/' + user._id, { withCredentials: true })
    //         .then((user) => {
    //             console.log(user.data);
    //             setUser(user);
    //         })
    //         .catch((err) => {
    //             console.log("Unable to process GET request for user");
    //         });
    // });
    return (
        <div>
            <ProjectList user={user} />
        </div>
    )
};

export default UserPage;