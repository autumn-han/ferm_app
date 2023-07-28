import React from 'react';
import axios from 'axios';

const Login = () => {
    return (
        <div>
            <div>
                <h1>Fermentation Tracker</h1>
            </div>
            <div>
                <div>
                    <h2>Already a Brewer?</h2>
                    <form>
                        <h3>Login Here:</h3>
                        <div>
                            <label>username:</label>
                            <input type='text' />
                        </div>
                        <div>
                            <label>password:</label>
                            <input type='text' />
                        </div>
                    </form>
                </div>
                <div>
                    <h2>Ready to Start?</h2>
                    <form>
                        <h3>Sign Up Here:</h3>
                        <div>
                            <label>username:</label>
                            <input type='text' />
                        </div>
                        <div>
                            <label>password:</label>
                            <input type='text' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;