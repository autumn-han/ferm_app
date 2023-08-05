import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectList from '../components/ProjectList';

const UserPage = () => {
    const [ user, setUser ] = useState({});
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/user/', { withCredentials: true })
    // });
    return (
        <div>
            <ProjectList />
        </div>
    )
};

export default UserPage;