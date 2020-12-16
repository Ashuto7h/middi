import { Events, Habit, Message } from '../types';
import { v4 as uuid } from 'uuid';
import dispatchHelper from '../state/dispatchHelper';
import { ACTIONS_SET, MESSAGE_ADDED, EVENT_EMITTED, LAST_MESSAGE_REMOVED } from '../state/appReducer';
import AddHabitForm from '../components/AddHabitForm';
import HabitList from '../components/HabitList';
import { startMessages, mainButtons } from './introduction';
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
                        type: EVENT_EMITTED,
                        payload: Events.HABIT_FORM_SUBMITTED
                })
            }},
            { 
                uuid: uuid(),
                label: 'Cancel', 
                callback: () => {
                    dispatchHelper.dispatch({
                        type: EVENT_EMITTED,
                        payload: Events.ACTION_CANCELLED
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

export const postHabitCreateSequence = () => {
    dispatchHelper.dispatch({
        type: MESSAGE_ADDED,
        payload: {
            messageClass: 'message--initial',
            sender: 'bot',
            text: `Amazing! You're all set to start tracking.`,
            delay: 500,
            showLoader: false,
            uuid: uuid()
        }
    });

    dispatchHelper.dispatch({
        type: MESSAGE_ADDED,
        payload: {
            ...startMessages,
            text: 'Use the buttons below to start tracking your progress 👇'
        }
    });
};

export const postHabitUpdateSequence = () => {
    dispatchHelper.dispatch({
        type: MESSAGE_ADDED,
        payload: {
            messageClass: 'message--initial',
            sender: 'bot',
            text: `You're all set! That habit's been updated`,
            delay: 500,
            showLoader: false,
            uuid: uuid(),
            dispatchOnSend: {
                type: 'ACTIONS_SET',
                payload: mainButtons
            }
        }
    });
};

export const updateHabitSequence = (habit: Habit) => {
    dispatchHelper.dispatch({
        type: MESSAGE_ADDED,
        payload: {
            messageClass: 'message--component',
            uuid: uuid(),
            sender: 'bot',
            text: null,
            delay: 1000,
            showLoader: false,
            Component: AddHabitForm,
            componentProps: {
                ...habit,
                editing: true
            }
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
                        type: EVENT_EMITTED,
                        payload: Events.HABIT_FORM_SUBMITTED
                })
            }},
            { 
                uuid: uuid(),
                label: 'Cancel', 
                callback: () => {
                    dispatchHelper.dispatch({
                        type: EVENT_EMITTED,
                        payload: Events.ACTION_CANCELLED
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