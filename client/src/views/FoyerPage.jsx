import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

const FoyerPage = () => {
    return (
        <div>
            <div>
                <h1>Welcome to Fermentation Tracker</h1>
            </div>
            <div>
                <div>
                    <LoginForm />
                </div>
                <div>
                    <RegistrationForm />
                </div>
            </div>
        </div>
    )
};

export default FoyerPage;