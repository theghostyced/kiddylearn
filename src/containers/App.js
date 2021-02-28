import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import routes from '../routes'

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact path='/'
          render={props => <Home {...props} />}
          />
        {routes.map((route) => (
          <Route path={route.path} key={route.name} render={(props) => <route.component {...props} />} />
        ))}
      </Switch>
    </Router>
  )
}

export default App;
