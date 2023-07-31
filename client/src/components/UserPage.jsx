import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserPage = () => {
    const [ user, setUser ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/user/' + userID)
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => console.log('Unable to process GET request'));
    });
    const onSubmitHandler = (e) => {
        e.preventDefault();
        // add in function that adds new project to the DOM to show in the list
    };
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
                <div>
                    <h2>Start a New Project</h2>
                    <form>
                        <div>
                            <label>Title:</label>
                            <input type='text' />
                        </div>
                        <div>
                            <label>Start-Date:</label>
                            <input type='date' />
                        </div>
                        <div>
                            <label>End-Date:</label>
                            <input type='date' />
                        </div>
                        <div>
                            <label>Status:</label>
                            <select>
                                <option value='Primary'>Primary</option>
                                <option value='Secondary'>Secondary</option>
                                <option value='Aging'>Aging</option>
                                <option value='Complete'>Complete</option>
                            </select>
                        </div>
                        <div>
                            <label>Description:</label>
                            <input type='textarea' />
                        </div>
                        <button>Add Brew Project</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserPage;