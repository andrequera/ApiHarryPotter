import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Cards from './components/Cards.jsx';
import Home from './components/Home.jsx';
import Info from './components/Info.jsx';




function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cards" component={Cards}/>
            <Route exact path="/info" component={Info}/>
        </Switch>
    </BrowserRouter>
  );
  }

  export default App;
