import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../src/containers/Main';
import SignIn from '../src/containers/SignIn';
import SignUp from '../src/containers/SignUp';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </div>
  );
};

export default App;
