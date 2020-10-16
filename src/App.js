import React from 'react';
import './css/App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Anime from './pages/anime/Anime';
import Inicio from './pages/inicio/Inicio';
import PageNotFound from './pages/PageNotFound';



function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/anime/:id" component={Anime} exact />
          <Route path="/" component={Inicio} exact />
          <Route component={PageNotFound} exact /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
