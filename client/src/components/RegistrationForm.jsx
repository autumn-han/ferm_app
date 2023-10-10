import React, { useState, useContext } from 'react';
import { userContext } from '../context/UserContext';

const RegistrationForm = (props) => {
    const { errMessage, errors, onSubmitProp } = props;
    const { setUser } = useContext(userContext);
    const [ userName, setUsername ] = useState("");
    const [ passWord, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        const newUser = { userName, passWord, confirmPassword };
        onSubmitProp(newUser);
        setUser(newUser);
    };
    return (
        <div>
            <h2>Ready to Start?</h2>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    {errors.map((err, index) => (
                        <p key={index}>{err}</p>
                    ))}
                    <p>{errMessage}</p>
                </div>
                <div>
                    <label className='form-label' htmlFor="userName">Username: </label>
                    <input className='form-control' type="text" name="userName" value={userName} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label className='form-label' htmlFor="passWord">Password: </label>
                    <input className='form-control' type="password" name="passWord" value={passWord} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label className='form-label' htmlFor="confirmPassword">Confirm Password: </label>
                    <input className='form-control' type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button className='btn btn-success mt-3'>Register</button>
            </form>
        </div>
    )
};

export default RegistrationForm;

