import { AppState, Events } from '../types';
import { v4 as uuid } from 'uuid';

export const AUTH_STATE_CHANGED = "AUTH_STATE_CHANGED";
export const MESSAGE_ADDED = 'MESSAGE_ADDED';
export const LAST_MESSAGE_REMOVED = 'LAST_MESSAGE_REMOVED';
export const ACTIONS_SET = 'ACTIONS_SET';
export const EMIT_EVENT = 'EMIT_EVENT';
export const SET_STATE = 'SET_STATE';

export const reducer = (state: AppState, action: { type: string, payload: any}): AppState => {
  console.log(action);
  switch (action.type) {
    case MESSAGE_ADDED:
        return {
            ...state,
            messages: [
                ...state.messages,
                {
                  ...action.payload,
                  uuid: action.payload.id || uuid()
                }
            ]
        }
    case LAST_MESSAGE_REMOVED:
      return {
          ...state,
          messages: state.messages.splice(0, state.messages.length-1),
          eventEmitted: Events.MESSAGE_REMOVED
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
    case EMIT_EVENT:
      return {
        ...state,
        eventEmitted: action.payload
      }
    case SET_STATE:
      return action.payload;
  }
  return state;
};