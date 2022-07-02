import './App.css';
import React from "react";
import Header from './Component/Header/Header';

import Footer from './Component/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SortVisual from './SortVisual/SortVisual';


import PathfindingVisual from './PathfindingVisual/PathfindingVisual';
function App() {
  return (
    <Router>
        <Header/>
    <Switch>
          <Route path="/about">

            <PathfindingVisual/>

          </Route>
          <Route path="/sort">
          <SortVisual/>


          </Route>
          
        </Switch>

        <Footer />
      </Router>
  );
}

export default App;
