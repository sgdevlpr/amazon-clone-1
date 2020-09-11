import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads (if brackets are empty)
    // just listens for a change in authUser
    // kind of like a dynamic if statement
    auth.onAuthStateChanged(authUser => {
      console.log('The user is ', authUser);

      if (authUser) {
        // the user just logged in or was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM Convention of naming classes!
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* default route ALWAYS has to be at the bottom!! */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
