import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import NavBar from './navbar.js';
import Log from './log.js';
import SignUp from './signup.js';

class App extends React.Component {
  render() {
  console.log(this.props);
  return (
    <BrowserRouter>
      <div className="App" >
        <NavBar />
        <Route exact path='/' component={Log} />
        <Route path='/signup' component={SignUp} />
      </div>
    </BrowserRouter>
  );
}
}
export default App;
