import { Events, Message } from '../types';
import { v4 as uuid } from 'uuid';
import dispatchHelper from '../state/dispatchHelper';
import { ACTIONS_SET, MESSAGE_ADDED, EMIT_EVENT } from '../state/appReducer';
import AddHabitForm from '../components/AddHabitForm';


export const addHabitSequence = () => {
    dispatchHelper.dispatch({
        type: MESSAGE_ADDED,
        payload: {
            messageClass: 'component',
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