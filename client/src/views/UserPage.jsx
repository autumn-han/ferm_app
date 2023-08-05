import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectList from '../components/ProjectList';

const UserPage = () => {
    const [ user, setUser ] = useState({});
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/user/' + userToken._id, { withCredentials: true })
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
            <ProjectList />
        </div>
    )
};

export default UserPage;