import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import { Warning } from './routes';

function RouterConfig({ history }) {
  return (
    <Router history={history} >
      <Route path="/" >
        <IndexRoute component={Warning} />
        <Route path="/warning" component={Warning} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
