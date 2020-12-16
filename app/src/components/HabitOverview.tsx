import React, { useState, useEffect, useContext, ReactElement } from 'react';
import { AppContext } from '../App';
import { CompletedTask, Habit } from '../types';
import { getHabitColorKey } from '../utils/utils';
import HabitCompleteToggle from './HabitCompleteToggle';
import isSameWeek from 'date-fns/isSameWeek';
import isSameDay from 'date-fns/isSameDay';
import format from 'date-fns/format';
import startOfWeek from 'date-fns/startOfWeek';
import add from 'date-fns/add';
import { ReactComponent as Rocket } from './icons/rocket.svg';
import { ReactComponent as Trophy } from './icons/trophy.svg';
import { ReactComponent as CheckedDate } from './icons/check-date.svg';
import { ReactComponent as Trash } from './icons/trash.svg';
import { ReactComponent as Done } from './icons/done.svg';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { deleteHabit } from '../state/api';
import { updateHabitSequence } from '../sequences/habits';

type WeekDayProps = {
    date: Date;
    habit: Habit;
    colorKey: string;
}

const WeekDay = ({ date, habit, colorKey }: WeekDayProps) => {
    const isToday = isSameDay(date, new Date());
    return (
        <div className={`week-summary__day ${isToday ? 'week-summary__day--today' : ''}`} key={date.getTime()}>
            <p>{format(date, 'E')}</p>
            <HabitCompleteToggle habit={habit} colorKey={colorKey} date={date} compact={true} />
        </div>
    )
}

type HabitOverviewProps = {
    habitId: number
};

const HabitOverview = ({ habitId }: HabitOverviewProps) => {
    const { appState } = useContext(AppContext);
    const [colorKey, setColorKey] = useState<string>('');
    const [habit, setHabit] = useState<Habit | any>(null);


    useEffect(() => {
        const currentHabit = appState.habits.find((h: Habit) => h.id === habitId );
        setHabit(currentHabit);
        if (currentHabit) {
            setColorKey(getHabitColorKey(currentHabit));
        }
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
    const getProgressBarWidth = () => {
        let progress = getThisWeeksTasks();
        if (progress > habit.weeklyGoal) {
            progress = habit.weeklyGoal;
        };
        return `${(progress/habit.weeklyGoal)*100}%`
    }

    const onDeleteHabit = () => {
        deleteHabit(habit);
    }

    const onEditHabit = () => {
        updateHabitSequence(habit);
    }

    return (
        habit ? <div className={`habit-overview habit-overview--${colorKey}`}>
            <div className="habit-overview__header">
                <div className="habit-overview__title">
                    <p>{habit.name}</p>
                    <p>{habit.description}</p>
                </div>
                <div className="habit-overview__options">
                    <Menu menuButton={
                        <button className="button button--clear button--compact">
                            <FontAwesomeIcon icon={faCog} />
                        </button>}
                        direction="left">
                        <MenuItem onClick={onEditHabit}><FontAwesomeIcon icon={faPencilAlt} /> Edit</MenuItem>
                        <MenuItem onClick={onDeleteHabit}><FontAwesomeIcon icon={faTrash} /> Delete</MenuItem>
                    </Menu>
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
                        <div className="progress-bar--filler" style={{ width: getProgressBarWidth() }}></div>
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
                        <CheckedDate />
                        <p>{habit.CompletedTasks.length}</p>
                    </div>
                    <span>Days completed</span>
                </div>
            </div>
            <div className="habit-overview__week-summary">
                {generateWeekdaySummary()}
            </div>
        </div>
        : <div className="habit-overview--deleted">
            <p>Deleted <Done /></p>
            <Trash />
        </div>
    )
}

export default HabitOverview;