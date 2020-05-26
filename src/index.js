import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './login-page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SingnUp from './signup-page';
import HomePage from './home-page';
import PageNotFound from './page-not-found';

import './css/style.css';

class AppComponent extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/signup" component={SingnUp} />
          <Route path="/home" component={HomePage} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>

    )
  }
}

ReactDOM.render(<AppComponent />, document.getElementById('root'));