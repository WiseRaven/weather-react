import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { Provider } from 'react-redux';

import HeaderLayout from './layouts/HeaderLayout';
import WeatherContainer from './containers/Weather';
import SettingsContainer from './containers/Settings';


const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose
));


export default class App extends React.Component {
  render() {
    return (
      <div className="wrap">
        <Provider store={store}>
          <BrowserRouter>
            <HeaderLayout />

            <Switch>
              <Route exact path='/' >
                  <WeatherContainer />
              </Route>
              <Route exact path='/settings' >
                  <SettingsContainer />
              </Route>
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
