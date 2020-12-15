import dispatchHelper from '../state/dispatchHelper';
import { ACTIONS_SET, MESSAGE_ADDED, EMIT_EVENT, SET_STATE } from '../state/appReducer';
import RegisterForm from '../components/RegisterForm';
import { AppState, Events, Message } from '../types';
import LoginForm from '../components/LoginForm';
import { v4 as uuid } from 'uuid';
import { addHabitSequence } from './habits';

export const registrationSequence = (): void => {
    // Add registration component
    dispatchHelper.dispatch({
        type: MESSAGE_ADDED,
        payload: {
            messageClass: 'message--component',
            uuid: uuid(),
            sender: 'bot',
            text: null,
            delay: 1000,
            showLoader: false,
            Component: RegisterForm
        }
    })
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
                        payload: Events.REGISTRATION_SUBMITTED
                })
            }}
        ]
    })
}

export const loginSequence = (): void => {
    dispatchHelper.dispatch({
        type: MESSAGE_ADDED,
        payload: {
            messageClass: 'message--component',
            uuid: uuid(),
            sender: 'bot',
            text: null,
            delay: 1000,
            showLoader: false,
            Component: LoginForm
        }
    })
    dispatchHelper.dispatch({
        type: ACTIONS_SET,
        payload: [
            {
                uuid: uuid(),
                label: 'Submit', 
                callback: () => {
                    dispatchHelper.dispatch({
                        type: EMIT_EVENT,
                        payload: Events.LOGIN_SUBMITTED
                    })
            }}
        ]
    })
}

export const postRegistrationSequence = (name: string) => {
    dispatchHelper.dispatch({
        type: MESSAGE_ADDED,
        payload: {
            messageClass: 'message--inital',
            uuid: uuid(),
            sender: 'bot',
            text: `Nice to meet you ${name}! We're on our way to building healthy habits 🚀`,
            delay: 1500,
            showLoader: false
        }
    });

    dispatchHelper.dispatch({
        type: MESSAGE_ADDED,
        payload: {
            messageClass: 'message--grouped',
            sender: 'bot',
            text: `First thing's first though, let's get a habit set up for you to track`,
            delay: 2500,
            showLoader: true,
            uuid: uuid(),
            dispatchOnSend: {
                type: 'ACTIONS_SET',
                payload: [
                {
                    uuid: uuid(),
                    label: 'Add a habit',
                    callback: addHabitSequence
                }]
            }
        }
    });
}

export const postLoginSequence = (name: string, state: AppState) => {

    const messagesToAdd: Message[] = [
        {
            messageClass: 'message--initial',
            sender: 'bot',
            text: `Welcome back ${name}! Good to see you again 😁`,
            delay: 1500,
            showLoader: false,
            uuid: uuid()
        },
        {
            messageClass: 'message--grouped',
            sender: 'bot',
            text: `How can I help you today?`,
            delay: 1500,
            showLoader: true,
            uuid: uuid(),
            dispatchOnSend: {
                type: 'ACTIONS_SET',
                payload: [{
                    uuid: uuid(),
                    label: 'View my habits',
                    callback: addHabitSequence
                },
                {
                    uuid: uuid(),
                    label: 'Add a habit',
                    callback: addHabitSequence
                }]
            }
        }
    ]

    const newState: AppState = {
        ...state,
        auth: {
            loggedIn: true,
            name
        },
        messages: [ ...state.messages, ...messagesToAdd ]
    }

    dispatchHelper.dispatch({
        type: SET_STATE,
        payload: newState
    });
}