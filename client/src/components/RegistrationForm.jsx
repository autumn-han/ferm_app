import React, { useState } from 'react';

const RegistrationForm = (props) => {
    const { errors, onSubmitProp } = props;
    const [ userName, setUsername ] = useState("");
    const [ passWord, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ userName, passWord, confirmPassword });
    };
    return (
        <div>
            <h2>Ready to Start?</h2>
            <form onSubmit={submitHandler}>
                <div>
                    {errors.map((err, index) => (
                        <p key={index}>{err}</p>
                    ))}
                </div>
                <div>
                    <label htmlFor="userName">Username: </label>
                    <input type="text" name="userName" value={userName} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="passWord">Password: </label>
                    <input type="password" name="passWord" value={passWord} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button>Register</button>
            </form>
        </div>
    )
};

export default RegistrationForm;

