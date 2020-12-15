import React, { useState, useContext } from 'react';
import { AppContext } from '../App';
import HabitListItem from './HabitListItem';
import format from 'date-fns/format';
import { Habit } from '../types';

const HabitList = () => {
    const { appState } = useContext(AppContext);

    return (
        <div className="habit-list">
            <p className="habit-list__title">{format(new Date(), 'EEEE, do LLLL yyyy')}</p>
            <p className="habit-list__subtitle">Toggle a habit to complete it for today</p>
            {appState.habits.map((habit: Habit) => (
                <HabitListItem habit={habit} key={habit.id} />
            ))}
        </div>
    )
};

export default HabitList;