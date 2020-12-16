import React, { useState, useEffect, useContext, ReactElement } from 'react';
import { AppContext } from '../App';
import { CompletedTask, Habit } from '../types';
import { getHabitColorKey } from '../utils/utils';
import HabitCompleteToggle from './HabitCompleteToggle';
import isSameWeek from 'date-fns/isSameWeek';
import format from 'date-fns/format';
import startOfWeek from 'date-fns/startOfWeek';
import add from 'date-fns/add';
import { ReactComponent as Rocket } from './icons/rocket.svg';
import { ReactComponent as Trophy } from './icons/trophy.svg';
import { ReactComponent as Done } from './icons/check-date.svg';

type WeekDayProps = {
    date: Date;
    habit: Habit;
    colorKey: string;
}

const WeekDay = ({ date, habit, colorKey }: WeekDayProps) => (
    <div className="week-summary__day" key={date.getTime()}>
        <p>{format(date, 'E')}</p>
        <HabitCompleteToggle habit={habit} colorKey={colorKey} date={date} compact={true} />
    </div>
)

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
    }, [appState])

    const getThisWeeksTasks = (): number => {
        const tasks = habit.CompletedTasks.filter((task: CompletedTask) => {
            return isSameWeek(new Date(task.dateCompleted), new Date());
        });
        return tasks.length;
    }

    const generateWeekdaySummary = (): ReactElement[] => {
        const weekStart: Date = startOfWeek(new Date());
        const days: ReactElement[] = [];
        for (let i=0; i < 7; i++) {
            const day = add(weekStart, { days: i });
            days.push(<WeekDay habit={habit} colorKey={colorKey} date={day} />);
        }
        return days;
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
                    <HabitCompleteToggle habit={habit} colorKey={colorKey} compact={true} date={new Date()} />
                </div>
            </div>
            <div className="habit-overview__stats">
                <div className="habit-overview__stat">
                    <div>
                        <Rocket />
                        <p>{getThisWeeksTasks()}/{habit.weeklyGoal}</p>
                    </div>
                    <span>Weekly goal</span>
                    <div className="progress-bar">
                        <div className="progress-bar--filler" style={{ width: `${(getThisWeeksTasks()/habit.weeklyGoal)*100}%` }}></div>
                    </div>
                </div>
                <div className="habit-overview__stat">
                    <div>
                        <Trophy />
                        <p>{habit.CompletedGoals.length}</p>
                    </div>
                    <span>Goals completed</span>
                </div>
                <div className="habit-overview__stat">
                    <div>
                        <Done />
                        <p>{habit.CompletedTasks.length}</p>
                    </div>
                    <span>Days completed</span>
                </div>
            </div>
            <div className="habit-overview__week-summary">
                {generateWeekdaySummary()}
            </div>
        </div>
    )
}

export default HabitOverview;