import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';





function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route> 
        </Switch>
      </Router>
    </>
  );
}

export default App;