import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import PlaceBet from './placebet/components/App'
import NavBar from './login/navbar.js';
import Log from './login/log.js';
import SignUp from './login/signup.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="App" >
        <Route exact path='/' component={Log} />
        <Route path='/signup' component={SignUp} />
        <Route path='/placebet' component={PlaceBet} />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
