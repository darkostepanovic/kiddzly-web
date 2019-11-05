import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Welcome from './containers/Welcome';
import Activities from './containers/Activities';
import ActivityDetail from './containers/ActivityDetail';
import NotFound from './containers/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/activities/:id" component={ActivityDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
