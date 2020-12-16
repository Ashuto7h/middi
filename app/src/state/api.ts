import env from '../env';
import dispatchHelper from './dispatchHelper';
import { authenticatedIntroSequence, unauthenticatedIntroSequence } from '../sequences/introduction';
import { AppState, CompletedTask, Habit } from '../types';
import { AUTH_STATE_CHANGED, LAST_MESSAGE_REMOVED, MESSAGE_ADDED, HABITS_SET, STATE_SET, HABIT_REMOVED } from './appReducer';
import { v4 as uuid } from 'uuid';

export const getAuthorizedUser = (appState: AppState) => {
    return fetch(`${env.apiUrl}/auth/auth-user`, {
      credentials: 'include',
    })
    .then(res => res.json())
    .then(res => {
      // authenticated user
      if (res.user) {
        dispatchHelper.dispatch({
          type: STATE_SET,
          payload: {
            ...appState,
            messages: authenticatedIntroSequence(res.user.name)
          }
        });
        dispatchHelper.dispatch({
          type: AUTH_STATE_CHANGED,
          payload: {
            loggedIn: true,
            name: res.user.name
          }
        });
      }
      else {
        // unauthenticated user
        dispatchHelper.dispatch({
          type: STATE_SET,
          payload: {
            ...appState,
            messages: unauthenticatedIntroSequence()
          }
        });
      }
    })
    .catch(res => {
      // unauthenticated user
      dispatchHelper.dispatch({
        type: STATE_SET,
        payload: {
          ...appState,
          messages: unauthenticatedIntroSequence()
        }
      });
    });
}

export const getHabits = () => {
    return fetch(`${env.apiUrl}/habits`, {
        credentials: 'include',
    })
    .then(res => res.json())
    .then(res => {
        if (res.err) {
          console.log(res.error);
        }
        else {
          dispatchHelper.dispatch({
            type: HABITS_SET,
            payload: res.habits
          })
        }
    });
} 

export const saveTaskState = (task: CompletedTask, method: 'DELETE' | 'POST') => {
  return fetch(`${env.apiUrl}/completed-tasks`, {
    credentials: 'include',
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  .then(res => res.json())
}

export const deleteHabit = (habit: Habit) => {
  return fetch(`${env.apiUrl}/habits`, {
    credentials: 'include',
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(habit)
  })
  .then(res => {
    dispatchHelper.dispatch({
      type: HABIT_REMOVED,
      payload: habit
    });
    dispatchHelper.dispatch({
      type: MESSAGE_ADDED,
      payload: {
          messageClass: 'message--initial',
          sender: 'bot',
          text: `That habit's been deleted 👍`,
          delay: 500,
          showLoader: false,
          uuid: uuid()
      }
    });
    return res.json()
  });
}