import React, { useState, useContext, useEffect, useRef } from 'react';
import { AppContext } from '../App';
import { Events } from '../types';
import env from '../env';
import Loading from './Loading';
import { postRegistrationSequence } from '../sequences/auth';

type RegisterForm = {
    email: string;
    password: string;
    name: string;
};

const RegisterForm = () => {
    const { appState } = useContext(AppContext);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (appState.eventEmitted === Events.REGISTRATION_SUBMITTED) {
            submit();
        }
    }, [appState.eventEmitted])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const submit = () => {
        setLoading(true);
        fetch(`${env.apiUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => {
            setLoading(false);
            postRegistrationSequence();
        })
    }

    return (
        <div className="register-form">
            { loading
                ? <Loading />
                : <form>
                    <label>Nickname <input name="name" type="text" onChange={handleInputChange} placeholder="What should I call you?" /></label>
                    <label>Email <input name="email" type="email" onChange={handleInputChange} placeholder="Used for logging in" /></label>
                    <label>Password <input name="password" type="password" placeholder="Choose something strong" onChange={handleInputChange} /></label>
                </form>
            }
        </div>
    )
};

export default RegisterForm;