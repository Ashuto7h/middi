import { createContext, useEffect, useReducer } from 'react';
import { reducer } from './state/appReducer';
import { initialState } from './state/initialState';
import './styles/styles.scss';
import './components/ChatBox';
import ChatBox from './components/ChatBox';
import dispatchHelper from './state/dispatchHelper';

export const AppContext = createContext();

const App = () => {
  const [appState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatchHelper.dispatch = (payload) => dispatch(payload);
    Object.freeze(dispatchHelper);
  }, [])

  return (
    <AppContext.Provider value={{ appState, dispatch}}>
      <div className="app">
        <header className="header">Middi</header>
        <ChatBox loggedIn={false} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
