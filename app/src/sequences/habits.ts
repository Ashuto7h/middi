import { Events, Habit, Message } from '../types';
import { v4 as uuid } from 'uuid';
import dispatchHelper from '../state/dispatchHelper';
import { ACTIONS_SET, MESSAGE_ADDED, EMIT_EVENT } from '../state/appReducer';
import AddHabitForm from '../components/AddHabitForm';
import HabitList from '../components/HabitList';
import { startMessages } from './introduction';
import Habits from '../components/Habits';
import HabitOverview from '../components/HabitOverview';


export const addHabitSequence = () => {
    dispatchHelper.dispatch({
        type: MESSAGE_ADDED,
        payload: {
            messageClass: 'message--component',
            uuid: uuid(),
            sender: 'bot',
            text: null,
            delay: 1000,
            showLoader: false,
            Component: AddHabitForm
        }
    });

    // Submit button
    dispatchHelper.dispatch({
        type: ACTIONS_SET,
        payload: [
            { 
                uuid: uuid(),
                label: 'Submit', 
                callback: () => {
                    dispatchHelper.dispatch({
                        type: EMIT_EVENT,
                        payload: Events.HABIT_FORM_SUBMITTED
                })
            }}
        ]
    })
}

export const viewHabitListSequence = () => {
    dispatchHelper.dispatch({
        type: MESSAGE_ADDED,
        payload: {
            messageClass: 'message--component',
            uuid: uuid(),
            sender: 'bot',
            text: null,
            delay: 1000,
            showLoader: false,
            Component: Habits
        }
    });

    dispatchHelper.dispatch({
        type: ACTIONS_SET,
        payload: [
            { 
                uuid: uuid(),
                label: 'Done', 
                callback: () => {
                    dispatchHelper.dispatch({
                        type: MESSAGE_ADDED,
                        payload: {
                            ...startMessages,
                            text: `What's next?`
                        }
                    })
                }}
        ]
    })
}


export const viewCompleteHabitListSequence = () => {
    dispatchHelper.dispatch({
        type: MESSAGE_ADDED,
        payload: {
            messageClass: 'message--component',
            uuid: uuid(),
            sender: 'bot',
            text: null,
            delay: 1000,
            showLoader: false,
            Component: HabitList
        }
    });

    dispatchHelper.dispatch({
        type: ACTIONS_SET,
        payload: [
            { 
                uuid: uuid(),
                label: 'Done', 
                callback: () => {
                    dispatchHelper.dispatch({
                        type: MESSAGE_ADDED,
                        payload: {
                            messageClass: 'message--initial',
                            uuid: uuid(),
                            sender: 'bot',
                            text: 'Keep up the good work! 🥳',
                            delay: 1000,
                            showLoader: false,
                            Component: HabitList
                        }
                    })
                    dispatchHelper.dispatch({
                        type: MESSAGE_ADDED,
                        payload: {
                            ...startMessages,
                            text: `What's next?`
                        }
                    })
                }}
        ]
    })
}

export const viewHabitOverviewSequence = (habit: Habit) => {
    dispatchHelper.dispatch({
        type: MESSAGE_ADDED,
        payload: {
            messageClass: 'message--component',
            uuid: uuid(),
            sender: 'bot',
            text: null,
            delay: 1000,
            showLoader: false,
            Component: HabitOverview,
            componentProps: {
                habitId: habit.id
            }
        }
    });

    dispatchHelper.dispatch({
        type: ACTIONS_SET,
        payload: [
            { 
                uuid: uuid(),
                label: 'Done', 
                callback: () => {
                    dispatchHelper.dispatch({
                        type: MESSAGE_ADDED,
                        payload: {
                            ...startMessages,
                            text: `What's next?`
                        }
                    })
                }}
        ]
    })
}