import { AppState, Events } from '../types';
import { v4 as uuid } from 'uuid';
import { addCompletedTask, removeCompletedTask, removeHabit } from './modifiers';

export const AUTH_STATE_CHANGED = "AUTH_STATE_CHANGED";
export const MESSAGE_ADDED = 'MESSAGE_ADDED';
export const LAST_MESSAGE_REMOVED = 'LAST_MESSAGE_REMOVED';
export const ACTIONS_SET = 'ACTIONS_SET';
export const EVENT_EMITTED = 'EVENT_EMITTED';
export const STATE_SET = 'STATE_SET';
export const HABITS_SET = 'HABITS_SET';
export const COMPLETED_TASK_ADDED = 'COMPLETED_TASK_ADDED';
export const COMPLETED_TASK_REMOVED = 'COMPLETED_TASK_REMOVED';
export const HABIT_REMOVED = 'HABIT_REMOVED';

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
    case EVENT_EMITTED:
      return {
        ...state,
        eventEmitted: action.payload
      }
    case HABITS_SET:
      return {
        ...state,
        habits: action.payload
      }
    case HABIT_REMOVED:
      return removeHabit(state, action.payload);
    case COMPLETED_TASK_ADDED:
      return addCompletedTask(state, action.payload);
    case COMPLETED_TASK_REMOVED:
      return removeCompletedTask(state, action.payload);
    case STATE_SET:
      return action.payload;
  }
  return state;
};