import React from "react";
import { Switch, Route } from 'react-router-dom'
import Loginpage from './pages/loginpage';
import Registerpage from './pages/registerpage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Loginpage} />
        <Route path='/register' component={Registerpage}/>
      </Switch>
    </div>
  );
}

export default App;
