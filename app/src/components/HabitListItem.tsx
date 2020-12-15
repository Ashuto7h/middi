import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../App';
import { CompletedTask, Habit } from '../types';
import env from '../env';
import Switch from 'react-switch';
import isSameDay from 'date-fns/isSameDay';
import { ReactComponent as Balloons } from './balloons.svg';
import { saveTaskState } from '../state/api';
import { ADD_COMPLETED_TASK, REMOVE_COMPLETED_TASK } from '../state/appReducer';

type HabitListItemProps = {
    habit: Habit
};

const HabitListItem = ({ habit }: HabitListItemProps) => {
    const { dispatch } = useContext(AppContext);
    const [colorKey, setColorKey] = useState<string>('');
    const [isCompletedToday, setIsCompletedToday] = useState<boolean>(false);
    const [completedTask, setCompletedTask] = useState<CompletedTask | null>(null);
    const [celebrate, setCelebrate] = useState<boolean>(false);

    useEffect(() => {
        const values = Object.values(env.habitColors);
        const keys = Object.keys(env.habitColors);
        const index = values.indexOf(habit.color);
        setColorKey(keys[index]);

        const completedToday = habit.CompletedTasks.find((task: CompletedTask) => {
            return isSameDay(new Date(task.dateCompleted), new Date());
        });
        if (completedToday) {
            setIsCompletedToday(true);
            setCompletedTask(completedToday);
        }
    }, [])

    const onCompleteToggle = (val: boolean) => {
        if (completedTask) {
            console.log('Deleteing...')
            saveTaskState(completedTask, 'DELETE')
            .then(res => {
                setIsCompletedToday(val);
                dispatch({
                    type: REMOVE_COMPLETED_TASK,
                    payload: completedTask
                });
            });
        }
        else {
            console.log('Creating...')
            const newTask: CompletedTask = {
                HabitId: habit.id,
                dateCompleted: Date.now().toString(),
            };
            saveTaskState(newTask, 'POST')
                .then(res => {
                    setCelebrate(val);
                    setIsCompletedToday(val);
                    setCompletedTask(res.completedTask);
                    dispatch({
                        type: ADD_COMPLETED_TASK,
                        payload: res.completedTask
                    });
                });
        }
    }

    return (
        <div className={`habit-list__item habit-list__item--${colorKey}`}>
            {habit.name}
            <div>
                {isCompletedToday && <p>Nice job! 🎉</p>}
                <label>
                    <Switch 
                        checked={isCompletedToday}
                        onChange={onCompleteToggle}
                        onColor={env.habitColors[colorKey]}
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}
                    />
                </label>
            </div>
            {celebrate && <Balloons />}
        </div>
    )
};

export default HabitListItem