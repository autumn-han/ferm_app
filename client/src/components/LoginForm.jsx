import React, { useState, useContext } from 'react';
import { userContext } from '../context/UserContext';

const LoginForm = (props) => {
    const { errMessage, onSubmitProp } = props;
    const { setUser } = useContext(userContext);
    const [ userName, setUsername ] = useState("");
    const [ passWord, setPassword ] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        const oldUser = { userName, passWord };
        onSubmitProp(oldUser);
        setUser(oldUser);
    };
    return (
        <div>
            <h2>Already A Brewer?</h2>
            <form className='form' onSubmit={submitHandler}>
                <div>
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
                <button className='btn btn-success mt-3'>Login</button>
            </form>
        </div>
    )
}
    

export default LoginForm;

