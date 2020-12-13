import { Message } from '../types';
import { registrationSequence, loginSequence } from './auth';
import { v4 as uuid } from 'uuid';

export const unauthenticatedIntroSequence = (): Message[] => [{
    messageClass: 'message--initial',
    sender: 'bot',
    text: 'Hi!',
    delay: 500,
    showLoader: false,
    uuid: uuid()
},
{
    messageClass: 'message--grouped',
    sender: 'bot',
    text: `My name's Middi. I'm here to help you track your inhaler usage.`,
    delay: 2000,
    showLoader: true,
    uuid: uuid()
},
{
    messageClass: 'message--grouped',
    sender: 'bot',
    text: `You can visit any time and I'll help you measure your inhaler adherence by asking a few simple questions.`,
    delay: 5000,
    showLoader: true,
    uuid: uuid()
},
{
    messageClass: 'message--grouped',
    sender: 'bot',
    text: `Ready to get started?`,
    delay: 7000,
    showLoader: true,
    uuid: uuid(),
    dispatchOnSend: {
        type: 'ACTIONS_SET',
        payload: [{
            uuid: uuid(),
            label: 'Log in',
            callback: loginSequence
        },
        {
            uuid: uuid(),
            label: 'Sign up',
            callback: registrationSequence
        }]
    }
}]

export const authenticatedIntroSequence = (name: string): Message[] => [{
    messageClass: 'message--initial',
    sender: 'bot',
    text: `Hi ${name}! Good to see you again 🙂`,
    delay: 500,
    showLoader: false,
    uuid: uuid()
},
{
    messageClass: 'message--grouped',
    sender: 'bot',
    text: `How can I help you?`,
    delay: 1500,
    showLoader: true,
    uuid: uuid(),
    dispatchOnSend: {
        type: 'ACTIONS_SET',
        payload: [{
            uuid: uuid(),
            label: 'Record a puff',
            callback: () => {

            }
        },
        {
            uuid: uuid(),
            label: 'Add an inhaler',
            callback: () => {}
        }]
    }
}]
