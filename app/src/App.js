import { createContext, useEffect, useReducer, useState } from 'react';
import { reducer } from './state/appReducer';
import { initialState } from './state/initialState';
import './styles/styles.scss';
import './components/ChatBox';
import ChatBox from './components/ChatBox';
import dispatchHelper from './state/dispatchHelper';
import { getAuthorizedUser, getHabits } from './state/api';
import GoalAchievementParty from './components/GoalAchievementParty';

export const AppContext = createContext();

const App = () => {
  const [appState, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  const initializeApp = () => {
    getAuthorizedUser(appState)
    .then(() => {
      getHabits()
    })
    .finally(() => setLoading(false));
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
      <GoalAchievementParty />
    </AppContext.Provider>
  );
}

export default App;
