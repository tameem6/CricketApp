import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import DashBoard2 from './dashboard/Main';
import DashBoard from './history/Dashboard';
import PlaceBet from './placebet/components/App'
import Log from './login/log.js';
import SignUp from './login/signup.js';
import Admin from './adminpage/Adminpage';
import CricketApp from './cricketapp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="App" >
        <Route exact path='/CricketApp/login' component={Log} />
        <Route path='/CricketApp/signup' component={SignUp} />
        <Route path='/CricketApp/placebet' component={PlaceBet} />
        <Route path='/CricketApp/dashboard' component={DashBoard} />
        <Route path='/CricketApp/dashboard2' component={DashBoard2} />
        <Route path='/CricketApp/admin' component={Admin} />

        <Route path='/CricketApp' component={CricketApp} />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
