import React from 'react'
import { Switch, Route } from 'react-router-dom'

const PageRoute = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)

export default PageRoute
