import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import DashBoard2 from './dashboard/Main';
import DashBoard from './history/Dashboard';
import PlaceBet from './placebet/components/App'
import Log from './login/log.js';
import SignUp from './login/signup.js';
import Admin from './adminpage/Adminpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="App" >
        <Route exact path='/' component={Log} />
        <Route path='/signup' component={SignUp} />
        <Route path='/placebet' component={PlaceBet} />
        <Route path='/dashboard' component={DashBoard} />
        <Route path='/dashboard2' component={DashBoard2} />
        <Route path='/admin' component={Admin} />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
