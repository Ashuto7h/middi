import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../App';
import { CompletedTask, Events, Habit } from '../types';
import Switch from 'react-switch';
import isSameDay from 'date-fns/isSameDay';
import { ReactComponent as Balloons } from './icons/balloons.svg';
import { getHabits, saveTaskState } from '../state/api';
import { ADD_COMPLETED_TASK, EMIT_EVENT, REMOVE_COMPLETED_TASK } from '../state/appReducer';
import env from '../env';

type HabitCompleteToggleProps = {
    habit: Habit,
    colorKey: string
};

const HabitCompleteToggle = ({ habit, colorKey }: HabitCompleteToggleProps) => {

    const { dispatch } = useContext(AppContext);
    const [isCompletedToday, setIsCompletedToday] = useState<boolean>(false);
    const [completedTask, setCompletedTask] = useState<CompletedTask | null>(null);
    const [celebrate, setCelebrate] = useState<boolean>(false);

    useEffect(() => {
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
            saveTaskState(completedTask, 'DELETE')
            .then(res => {
                setCompletedTask(null);
                setIsCompletedToday(val);
                dispatch({
                    type: REMOVE_COMPLETED_TASK,
                    payload: completedTask
                });
            });
        }
        else {
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
                    if (res.goalCompleted) {
                        // Trigger goal achievement party
                        getHabits();
                        dispatch({
                            type: EMIT_EVENT,
                            payload: Events.GOAL_COMPLETED
                        });
                    }
                });
        }
    }

    return (
        <>
            <div className="habit-complete-toggle">
                <p className={isCompletedToday ? '' : 'item-status--transparent'}>Nice job! 🎉</p>
                <label>
                    <Switch 
                        checked={isCompletedToday}
                        onChange={onCompleteToggle}
                        onColor={env.habitColors[colorKey]}
                        handleDiameter={20}
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
        </>
    )
}

export default HabitCompleteToggle;