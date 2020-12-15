import React, { useContext } from 'react';
import { AppContext } from '../App';
import { CompletedTask, Habit } from '../types';
import { getHabitColorKey } from '../utils/utils';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { viewHabitOverviewSequence } from '../sequences/habits';

const Habits = () => {
    const { appState, dispatch } = useContext(AppContext);

    const getLastCompletedDate = (habit: Habit): string => {
        if (habit.CompletedTasks?.length) {
            const sortedTasks = habit.CompletedTasks.sort((ca: CompletedTask, cb: CompletedTask) => {
                return (new Date(cb.dateCompleted) as any) - (new Date(ca.dateCompleted) as any);
            });
            const mostRecent = new Date(sortedTasks[0].dateCompleted);
            return `Last completed ${formatDistanceToNow(mostRecent, { addSuffix: true })}`
        }
        return ''
    }

    const viewHabit = (habit: Habit) => {
        viewHabitOverviewSequence(habit);
    }

    return (
        <div className="habits habit-list">
            {appState.habits.map((habit: Habit) => (
                <div className={`habit-list__item habit-list__item--${getHabitColorKey(habit)}`} key={habit.id}>
                    <div className="habits__description">
                        {habit.name}
                        <p>{getLastCompletedDate(habit)}</p>
                    </div>
                    <button className="button" onClick={() => viewHabit(habit)}>View</button>
                </div>
            ))}
        </div>
    )
};

export default Habits;