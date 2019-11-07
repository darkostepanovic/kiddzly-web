import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Welcome from './containers/Welcome';
import Activities from './containers/Activities';
import ActivityDetail from './containers/ActivityDetail';
import NotFound from './containers/404';

function App(props) {
  console.log('Hello: ', props);
  return (
    <Router>
      {props.promptEvent && <p>Instaliraj app</p>}
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/activities/:id" component={ActivityDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  global: state.global,
});

export default connect(
  mapStateToProps,
  null,
)(App);
