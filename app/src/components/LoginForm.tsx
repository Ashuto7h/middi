import React, { useState, useContext, useEffect, useRef } from 'react';
import { AppContext } from '../App';
import { Events } from '../types';
import env from '../env';
import Loading from './Loading';
import { postLoginSequence, postRegistrationSequence } from '../sequences/auth';
import { ReactComponent as Done } from './done.svg';

type LoginForm = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const { appState, dispatch } = useContext(AppContext);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (appState.eventEmitted === Events.LOGIN_SUBMITTED) {
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
        fetch(`${env.apiUrl}/auth/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(res => {
            const { name } = res;
            setLoading(false);
            setSubmitted(true)
            postLoginSequence(name, appState);
        })
    }

    return (
        <div className="form login-form">
            <form>
                <h3>👤 Login</h3>
                {loading
                    ? <Loading />
                    : !submitted 
                        ? <>
                            <label>Email <input name="email" type="email" onChange={handleInputChange} /></label>
                            <label>Password <input name="password" type="password" onChange={handleInputChange} /></label>
                        </>
                        : <div className="form__placeholder-success"><Done /></div>
                }
            </form>
        </div>
    )
};

export default LoginForm;