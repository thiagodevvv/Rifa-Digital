import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Context } from '../src/Context/AuthContext'

import LoginBar from './components/LoginBar'
import CreateRifa from './pages/CreateRifa'
import Register from './pages/Register'

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated} = useContext(Context)

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/LoginBar" component={LoginBar} />
      <CustomRoute exact path="/register" component={Register} />
      <CustomRoute isPrivate exact path="/CreateRifa" component={CreateRifa} />
    </Switch>
  );
}