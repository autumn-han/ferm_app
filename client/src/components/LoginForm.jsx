import React from 'react';

const LoginForm = () => {
    return (
        <div>
            <form>
                <h2>Already A Brewer?</h2>
                <div>
                    <label>Username: </label>
                    <input type="text" />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" />
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}
    

export default LoginForm;

