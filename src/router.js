import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ItemsPage from './routes/ItemsPage';
import VideoPage from './routes/VideoPage';
import RegisterPage from './routes/RegisterPage';
import CheckInPage from './routes/CheckInPage'

function RouterConfig({ browserHistory }) {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={IndexPage} />
      <Route path="/item" component={ItemsPage} />
      <Route path="/video" component={VideoPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/checkin" component={CheckInPage} />
    </Router>
  );
}

export default RouterConfig;
