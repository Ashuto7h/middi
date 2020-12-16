import React, { useEffect, useState } from 'react';
import { Habit } from '../types';
import { getHabitColorKey } from '../utils/utils';
import HabitCompleteToggle from './HabitCompleteToggle';

type HabitListItemProps = {
    habit: Habit
};

const HabitListItem = ({ habit }: HabitListItemProps) => {
    const [colorKey, setColorKey] = useState<string>('');

    useEffect(() => {
        setColorKey(getHabitColorKey(habit));
    }, [])

    return (
        <div className={`habit-list__item habit-list__item--${colorKey}`}>
            <span>{habit.name}</span>
            <HabitCompleteToggle habit={habit} colorKey={colorKey} date={new Date()} />
        </div>
    )
};

export default HabitListItem