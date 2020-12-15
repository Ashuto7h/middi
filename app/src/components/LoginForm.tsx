import React, { useState, useContext, useEffect, useRef } from 'react';
import { AppContext } from '../App';
import { Events } from '../types';
import env from '../env';
import Loading from './Loading';
import { postLoginSequence, registrationSequence } from '../sequences/auth';
import { ReactComponent as Done } from './done-shield.svg';
import { EMIT_EVENT } from '../state/appReducer';

type LoginForm = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const { appState, dispatch } = useContext(AppContext);
    const [formData, setFormData] = useState<LoginForm>({ email: '', password: '' });
    const [loading, setLoading] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string>(' ');

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
        setError('')
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
            if (res.err) {
                setLoading(false);
                setError(res.err.message);
            }
            else {
                const { name } = res;
                setLoading(false);
                setSubmitted(true)
                postLoginSequence(name, appState);
            }
            dispatch({
                type: EMIT_EVENT,
                payload: ''
            })
        });
    }

    const showRegistration = () => {

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
                {(!loading && !submitted) &&
                    <div className="form__extra">
                        <p className="error">{ error }</p>
                        <a onClick={registrationSequence}>Sign Up</a>
                    </div>
                }
            </form>
        </div>
    )
};

export default LoginForm;