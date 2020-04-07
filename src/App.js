import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';

import WelcomeScreen from './components/blocks/WelcomeScreen';
import FeaturedActivities from './containers/FeaturedActivities';
import Activities from './containers/Activities';
import NotFound from './containers/404';

import config from './config';

function App(props) {
  useEffect(() => {
    firebase.initializeApp(config.firebaseConfig);
    firebase.analytics();
  }, []);
  return (
    <Router>
      {/*{props.global.promptEvent && (*/}
      {/*  <p*/}
      {/*    onClick={() => {*/}
      {/*      props.global.promptEvent.prompt();*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    Instaliraj app*/}
      {/*  </p>*/}
      {/*)}*/}
      <Switch>
        <Route exact path="/" component={WelcomeScreen} />
        <Route exact path="/activities" component={Activities} />
        <Route
          exact
          path="/featured-activities"
          component={FeaturedActivities}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  global: state.global,
});

export default connect(mapStateToProps, null)(App);
