import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeComponent from './components/Home/HomeComponent';


function App() {   

  return (
      <div className="container">
          <Router>
              <div className="col-md-12">
                 <header className="header-container">
                     EmployeeStore
                 </header>
                  <Switch>
                      <Route path="/" exact component={HomeComponent} />
                      <Route path="/home" component={HomeComponent} />
                 
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
