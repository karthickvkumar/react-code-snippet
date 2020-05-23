import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './login-page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SingnUp from './signup-page';
import PageNotFound from './page-not-found';

import './css/style.css';

class AppComponent extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Welcome to React JS</h2>
        </div>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/signup" component={SingnUp} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>

    )
  }
}

ReactDOM.render(<AppComponent />, document.getElementById('root'));