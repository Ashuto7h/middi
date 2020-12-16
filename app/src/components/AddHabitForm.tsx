import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../App';
import { Events } from '../types';
import env from '../env';
import Loading from './Loading';
import { ReactComponent as Done } from './icons/done.svg';
import { EVENT_EMITTED } from '../state/appReducer';
import { getHabits } from '../state/api';
import ColorSelect from './ColorSelect';
import { postHabitCreateSequence } from '../sequences/habits';

type HabitForm = {
    name: string;
    description: string;
    color: string;
    weeklyGoal: number;
};

const AddHabitForm = () => {
    const defaultForm = {
        name: '',
        description: '',
        color: '',
        weeklyGoal: 1
    };
    const { appState, dispatch } = useContext(AppContext);
    const [formData, setFormData] = useState<HabitForm>(defaultForm);
    const [loading, setLoading] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string>(' ');
    const [disabled, setDisabled] = useState<boolean>(false);

    useEffect(() => {
        if (appState.eventEmitted === Events.HABIT_FORM_SUBMITTED && !disabled) {
            submit();
        }
        else if (appState.eventEmitted === Events.HABIT_FORM_SUBMITTED) {
            setDisabled(true);
        }
    }, [appState.eventEmitted])

    const handleInputChange = (event: React.ChangeEvent<any>) => {
        let value = event.target.value;
        if (event.target.name === 'weeklyGoal') {
            value = parseInt(value);
        }
        setFormData({
            ...formData,
            [event.target.name]: value
        });
    }

    const submit = () => {
        setError('')
        if (formData.name && formData.color) {
            setLoading(true);
            fetch(`${env.apiUrl}/habits`, {
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
                    setSubmitted(true)
                    getHabits();
                    postHabitCreateSequence();
                }
                dispatch({
                    type: EVENT_EMITTED,
                    payload: ''
                })
            });
        }
        else {
            setError('Name and color are required!');
        }
    }

    return (
        <div className="form add-habit-form">
            <form>
                <h3>➕ New Habit</h3>
                {loading
                    ? <Loading />
                    : !submitted 
                        ? <>
                            <label>Name <input name="name" type="text" maxLength={150} onChange={handleInputChange} 
                                placeholder="Drink 3 glasses of water, Do 10 pushups..."
                            /></label>
                            <label>Description (optional) <textarea name="description" rows={4} maxLength={300} onChange={handleInputChange} /></label>
                            <ColorSelect onColorSelect={handleInputChange} />
                            <label>Weekly goal - how many times a week are you aiming to complete this goal?
                                <select name="weeklyGoal" onChange={handleInputChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                </select>
                            </label>
                        </>
                        : <div className="form__placeholder-success"><Done /></div>
                }
                {(!loading && !submitted) &&
                    <div className="form__extra">
                        <p className="error">{ error }</p>
                    </div>
                }
            </form>
        </div>
    )
};

export default AddHabitForm;