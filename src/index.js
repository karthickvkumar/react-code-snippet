import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './login-page';
// import { SingnUp } from './signup-page';

import './css/style.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div>
        <LoginPage></LoginPage>
      </div >
    )
  }
}

ReactDOM.render(<AppComponent />, document.getElementById('root'));