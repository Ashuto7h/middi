import React, { useState, useContext, useEffect, ReactElement } from 'react';
import { AppContext } from '../App';
import { Events } from '../types';
import env from '../env';
import Loading from './Loading';
import { ReactComponent as Done } from './icons/done.svg';
import { EVENT_EMITTED } from '../state/appReducer';
import { createHabit, getHabits, updateHabit } from '../state/api';
import ColorSelect from './ColorSelect';
import { postHabitCreateSequence, postHabitUpdateSequence } from '../sequences/habits';

type HabitForm = {
    id?: number;
    name: string;
    description: string;
    color: string;
    weeklyGoal: number;
    editing?: boolean;
};

const AddHabitForm = ({ id, name, description, color, weeklyGoal, editing }: HabitForm) => {
    const defaultForm = {
        name: name || '',
        description: description || '',
        color: color || '',
        weeklyGoal: weeklyGoal || 1
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
        else if (appState.eventEmitted === Events.HABIT_FORM_SUBMITTED && (formData.name && formData.color)) {
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
        let promise: Promise<any>;
        if (formData.name && formData.color) {
            setLoading(true);
            if (editing) {
                promise = updateHabit({
                    ...formData,
                    id
                });
            }
            else {
                promise = createHabit(formData);
            }
            promise.then(res => {
                if (res.err) {
                    setLoading(false);
                    setError(res.err.message);
                }
                else {
                    setLoading(false);
                    setSubmitted(true)
                    getHabits();
                    editing ? postHabitUpdateSequence() : postHabitCreateSequence();
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

    const generateOptions = (): ReactElement[] => {
        const weekDays = [1, 2, 3, 4, 5, 6, 7];
        return weekDays.map((day: number) => (
            <option selected={formData.weeklyGoal === day} value={`${day}`}>{day}</option>
        ));
    };

    return (
        <div className="form add-habit-form">
            <form>
                <h3>➕ New Habit</h3>
                {loading
                    ? <Loading />
                    : !submitted 
                        ? <>
                            <label>Name <input name="name" defaultValue={formData.name} type="text" maxLength={150} onChange={handleInputChange} 
                                placeholder="Drink 3 glasses of water, Do 10 pushups..."
                            /></label>
                            <label>Description (optional) 
                                <textarea 
                                    name="description" 
                                    defaultValue={formData.description} 
                                    rows={4} 
                                    maxLength={300} 
                                    onChange={handleInputChange}
                                />
                            </label>
                            <ColorSelect onColorSelect={handleInputChange} defaultValue={formData.color} />
                            <label>Weekly goal - how many times a week are you aiming to complete this goal?
                                <select name="weeklyGoal" onChange={handleInputChange}>
                                    {generateOptions()}
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