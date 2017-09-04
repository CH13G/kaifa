import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ItemsPage from './routes/ItemsPage';
import VideoPage from './routes/VideoPage';
import RegisterPage from './routes/RegisterPage';
import CheckInPage from './routes/CheckInPage';
import { Warning } from './routes';


function RouterConfig({ history }) {
    return (
      <Router history = { history } >
        <Route path = "/"component = { IndexPage }/>
         <Route path = "/item" component = { ItemsPage }/>
         <Route path = "/video" component = { VideoPage }/>
         <Route path = "/register" component = { RegisterPage }/>
         <Route path = "/checkin" component = { CheckInPage }/>
         <Route path = "/warning" component = { Warning }/>

      </Router>
    );
}

export default RouterConfig;
