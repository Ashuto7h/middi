import { AppState } from '../types';

export const AUTH_STATE_CHANGED = "AUTH_STATE_CHANGED";
export const MESSAGE_ADDED = 'MESSAGE_ADDED';
export const ACTIONS_SET = 'ACTIONS_SET';

export const reducer = (state: AppState, action: { type: string, payload: any}) => {
  console.log(action);
  switch (action.type) {
    case MESSAGE_ADDED:
        return {
            ...state,
            messages: [
                ...state.messages,
                action.payload
            ]
        }
    case ACTIONS_SET:
        return {
            ...state,
            actions: action.payload
        }
    case AUTH_STATE_CHANGED:
      return {
        ...state,
        auth: action.payload
      };
  }
  return state;
};