import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import { Warning, Reminder, Feedback, Recovered } from './routes';

function RouterConfig({ history }) {
  return (
    <Router history={history} >
      <Route path="/" >
        <IndexRoute component={Warning} />
        <Route path="/warning" component={Warning} />
        <Route path="/reminder" component={Reminder} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/recovered" component={Recovered} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
