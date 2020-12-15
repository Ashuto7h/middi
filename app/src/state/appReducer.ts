import { AppState, Events } from '../types';
import { v4 as uuid } from 'uuid';
import { addCompletedTask, removeCompletedTask } from './modifiers';

export const AUTH_STATE_CHANGED = "AUTH_STATE_CHANGED";
export const MESSAGE_ADDED = 'MESSAGE_ADDED';
export const LAST_MESSAGE_REMOVED = 'LAST_MESSAGE_REMOVED';
export const ACTIONS_SET = 'ACTIONS_SET';
export const EMIT_EVENT = 'EMIT_EVENT';
export const SET_STATE = 'SET_STATE';
export const SET_HABITS = 'SET_HABITS';
export const ADD_COMPLETED_TASK = 'ADD_COMPLETED_TASK';
export const REMOVE_COMPLETED_TASK = 'REMOVE_COMPLETED_TASK';

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
    case SET_HABITS:
      return {
        ...state,
        habits: action.payload
      }
    case ADD_COMPLETED_TASK:
      return addCompletedTask(state, action.payload);
    case REMOVE_COMPLETED_TASK:
      return removeCompletedTask(state, action.payload);
    case SET_STATE:
      return action.payload;
  }
  return state;
};