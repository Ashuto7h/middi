import { AppState } from '../types'

export const initialState: AppState = {
    auth: {
        loggedIn: false,
        name: ''
    },
    messages: [],
    actions: [],
    eventEmitted: null
};