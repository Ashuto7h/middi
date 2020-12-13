import { createContext, useEffect, useReducer, useState } from 'react';
import { AUTH_STATE_CHANGED, MESSAGE_ADDED, reducer, SET_STATE } from './state/appReducer';
import { initialState } from './state/initialState';
import './styles/styles.scss';
import './components/ChatBox';
import ChatBox from './components/ChatBox';
import dispatchHelper from './state/dispatchHelper';
import env from './env';
import { authenticatedIntroSequence, unauthenticatedIntroSequence } from './sequences/introduction';

export const AppContext = createContext();

const App = () => {
  const [appState, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);


  const initializeApp = () => {
    fetch(`${env.apiUrl}/auth/auth-user`, {
      credentials: 'include',
    })
    .then(res => res.json())
    .then(res => {
      // authenticated user
      if (res.user) {
        dispatch({
          type: SET_STATE,
          payload: {
            ...appState,
            messages: authenticatedIntroSequence(res.user.name)
          }
        });
        dispatch({
          type: AUTH_STATE_CHANGED,
          payload: {
            loggedIn: true,
            name: res.user.name
          }
        });
      }
      else {
        // unauthenticated user
        dispatch({
          type: SET_STATE,
          payload: {
            ...appState,
            messages: unauthenticatedIntroSequence()
          }
        });
      }
    })
    .finally(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    dispatchHelper.dispatch = (payload) => dispatch(payload);
    Object.freeze(dispatchHelper);
    initializeApp()
  }, [])

  return (
    <AppContext.Provider value={{ appState, dispatch}}>
      <div className="app">
        <header className="header">Middi</header>
        {!loading && <ChatBox loggedIn={false} />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
