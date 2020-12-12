import { AppState } from '../types'
import dispatchHelper from './dispatchHelper';
import { MESSAGE_ADDED } from './appReducer';

export const initialState: AppState = {
    auth: {
        loggedIn: false,
        username: ''
    },
    messages: [
        {
            type: 'message--initial',
            sender: 'bot',
            text: 'Hi!',
            delay: 500,
            showLoader: false,

        },
        {
            type: 'message--grouped',
            sender: 'bot',
            text: `My name's Middi. I'm here to help you track your inhaler usage.`,
            delay: 2000,
            showLoader: true,
        },
        {
            type: 'message--grouped',
            sender: 'bot',
            text: `You can visit any time and I'll help you keep track of your medication by asking a few simple questions.`,
            delay: 5000,
            showLoader: true,
        },
        {
            type: 'message--grouped',
            sender: 'bot',
            text: `Ready to get started?`,
            delay: 7000,
            showLoader: true,
            dispatchOnSend: {
                type: 'ACTIONS_SET',
                payload: [{
                    label: 'Log in',
                    callback: () => {
                        dispatchHelper.dispatch({
                            type: MESSAGE_ADDED,
                            payload: {
                                type: 'message--initial',
                                sender: 'bot',
                                text: `Great! Let's do it`,
                                delay: 1000,
                                showLoader: false,
                            }
                        })
                    }
                },
                {
                    label: 'Sign up',
                    callback: () => alert('Good stuff!')
                }]
            }
        }
    ],
    actions: []
};