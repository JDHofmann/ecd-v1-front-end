import './App.css';
import React from 'react'
import Main from './container/main';
import { connect } from 'react-redux';
import {  Route, Switch } from 'react-router-dom';
import Screening from './container/Screening';
import Resources from './container/Resources';
import { fetchQuestions, fetchUsers } from './redux/actions';


class App extends React.Component {

  componentDidMount(){
    this.props.fetchQuestions()

}

  render(){
  
    return (
      <div className="App">
        <header  ><h1>Non-Accidental Trauma Screening and Referral Tool</h1></header>
        <Switch>
          <Route 
            // path={`/screening_tool/${this.props.page}`}
            path="/screening_tool"
            render={ () => 
            <Screening /> }
          />
          <Route 
            path="/resources"
            render={ () => <Resources />}
          />
          <Route 
            path="/"
            render={ () => 
            <Main 
              fetchUsers={this.props.fetchUsers}
            />
          }
          />
        </Switch>
      </div>
    );
  }

}

const msp = state => {
  return {
      page: state.page,
      user: state.user
  }
}

const mdp = dispatch => {
  return {
      fetchQuestions: () => dispatch(fetchQuestions()),
      fetchUsers: () => dispatch(fetchUsers())
  }
}
export default connect(msp, mdp)(App)
