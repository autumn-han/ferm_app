import React, { useState } from 'react';

const LoginForm = (props) => {
    const { errMessage, onSubmitProp } = props;
    const [ userName, setUsername ] = useState("");
    const [ passWord, setPassword ] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ userName, passWord });
    };
    return (
        <div>
            <h2>Already A Brewer?</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <p>{errMessage}</p>
                </div>
                <div>
                    <label htmlFor="userName">Username: </label>
                    <input type="text" name="userName" value={userName} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="passWord">Password: </label>
                    <input type="password" name="passWord" value={passWord} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}
    

export default LoginForm;

