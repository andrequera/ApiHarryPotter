import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './view/Home.jsx';
import Personajes from './view/Personajes.jsx';
import Casas from './view/Casas.jsx';
import Personaje from './view/Personaje1.jsx';
import Casa from './view/Casa1.jsx';
import './App.css';
import 'jquery'; 
import 'popper.js'; 
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner.jsx';


function App() {
  return (
    <div className="container"> 
      <BrowserRouter>
          <Navbar/>
          <Banner/>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/personajes" component={Personajes} />
                    <Route exact path="/casas" component={Casas} />

                    <Route exact path="/personaje/:id" component={Personaje} />
                    <Route exact path="/casa" component={Casa} />

                    <Route render={() => <h1>Not found!</h1>} />
                </Switch>
      </BrowserRouter>
      
   </div>
  );


export default App;
  
  
  
  
 
