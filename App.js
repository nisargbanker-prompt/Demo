import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import RootComponent from './src/components/RootComponent';

import authReducer from './src/store/reducers/auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <RootComponent>
        <AppNavigator />
      </RootComponent>
    </Provider>
  );
}
