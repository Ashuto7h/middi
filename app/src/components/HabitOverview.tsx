import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import { CompletedTask, Habit } from '../types';
import { getHabitColorKey } from '../utils/utils';
import HabitCompleteToggle from './HabitCompleteToggle';
import isSameWeek from 'date-fns/isSameWeek';
import { ReactComponent as Rocket } from './icons/rocket.svg';
import { ReactComponent as Trophy } from './icons/trophy.svg';

type HabitOverviewProps = {
    habitId: number
};

const HabitOverview = ({ habitId }: HabitOverviewProps) => {
    const { appState } = useContext(AppContext);
    const [colorKey, setColorKey] = useState<string>('');
    const [habit, setHabit] = useState<Habit | any>(null);


    useEffect(() => {
        const currentHabit = appState.habits.find((h: Habit) => h.id === habitId );
        setColorKey(getHabitColorKey(currentHabit));
        setHabit(currentHabit);
    }, [appState.habits])

    const getThisWeeksTasks = () => {
        const tasks = habit.CompletedTasks.filter((task: CompletedTask) => {
            return isSameWeek(new Date(task.dateCompleted), new Date());
        });
        return tasks.length;
    }

    return (
        habit && <div className={`habit-overview habit-overview--${colorKey}`}>
            <div className="habit-overview__header">
                <div className="ho__header__title">
                    <p>{habit.name}</p>
                    <p>{habit.description}</p>
                </div>
                <div className="habit-overview__toggle">
                    <p>Today</p>
                    <HabitCompleteToggle habit={habit} colorKey={colorKey} />
                </div>
            </div>
            <div className="habit-overview__stats">
                <div className="habit-overview__progress">
                    <div>
                        <Rocket />
                        <p>{getThisWeeksTasks()}/{habit.weeklyGoal}</p>
                    </div>
                    <span>Weekly goal</span>
                    <div className="progress-bar">
                        <div className="progress-bar--filler" style={{ width: `${(getThisWeeksTasks()/habit.weeklyGoal)*100}%` }}></div>
                    </div>
                </div>
                <div className="habit-overview__badges">
                    <div>
                        <Trophy />
                        <p>{habit.CompletedGoals.length}</p>
                    </div>
                    <span>Goals completed</span>
                </div>
            </div>
        </div>
    )
}

export default HabitOverview;