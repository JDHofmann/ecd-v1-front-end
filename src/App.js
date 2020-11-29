import './App.css';
import React from 'react'
import Main from './container/main';
// import { connect } from 'react-redux';
import {  Route, Switch } from 'react-router-dom';
import Screening from './container/Screening';

class App extends React.Component {

  // state = {
  //   formPage: 0
  // }

  render(){
    
    const styling = {
      height: "5vh"
    }
  
    return (
      <div className="App">
        <header style={styling} ><h1>ECD</h1></header>
        <Switch>
          <Route 
            path="/screening_tool"
            render={ () => 
            <Screening /> }
          />
          <Route 
            path="/"
            render={ () => 
            <Main />
          }
          />
        </Switch>
      </div>
    );
  }

}

export default App;
