import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cards from './components/Cards.jsx';
import Home from './components/Home.jsx';
import Info from './components/Info.jsx';
import Navbar from './components/navbar.jsx';




function App() {
    return (
        <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cards" component={Cards} />
                    <Route exact path="/info" component={Info} />
                    <Route render={() => <h1>Not found!</h1>} />
                </Switch>
        </BrowserRouter>
    );
}

export default App;
