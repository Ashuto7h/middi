import React, { useState, useContext, useEffect, useRef } from 'react';
import { AppContext } from '../App';
import { Events } from '../types';
import env from '../env';
import Loading from './Loading';
import { postRegistrationSequence, loginSequence } from '../sequences/auth';
import { ReactComponent as Done } from './icons/done-shield.svg';

type RegisterForm = {
    email: string;
    password: string;
    name: string;
};

const RegisterForm = () => {
    const { appState } = useContext(AppContext);
    const [formData, setFormData] = useState<RegisterForm>({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string>(' ');

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
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(res => {
            if (res.err) {
                setLoading(false);
                setError(res.err.message);
            }
            else {
                setLoading(false);
                setSubmitted(true);
                postRegistrationSequence(formData.name);
            }
        })
    }

    return (
        <div className="register-form">
            <form>
                <h3>👤 Sign Up</h3>
                { loading 
                    ? <Loading />
                    : !submitted
                        ? <>
                            <label>Nickname <input name="name" type="text" onChange={handleInputChange} placeholder="What should I call you?" /></label>
                            <label>Email <input name="email" type="email" onChange={handleInputChange} placeholder="Only used for logging in" /></label>
                            <label>Password <input name="password" type="password" placeholder="Choose something strong" onChange={handleInputChange} /></label>
                        </>
                        : <div className="form__placeholder-success"><Done /></div>
                }
                {(!loading && !submitted) &&
                    <div className="form__extra">
                        <p className="error">{ error }</p>
                        <a onClick={loginSequence}>Log In</a>
                    </div>
                }
            </form>
        </div>
    )
};

export default RegisterForm;