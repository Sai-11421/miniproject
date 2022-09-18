import React from "react";
import { Switch, Route } from 'react-router-dom'
import Loginpage from './pages/loginpage';
import Registerpage from './pages/registerpage';
import Homepage from "./pages/Homepage";
import CategoryPage from './pages/categoryPage'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/login' component={Loginpage} />
        <Route path='/register' component={Registerpage} />
        <Route path='/:category' component={CategoryPage} />
      </Switch>
    </div>
  );
}

export default App;
