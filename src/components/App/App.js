import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import utility from '../../utility';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Resources from '../Resources/Resources';
import Account from '../Account/Account';
import Saved from '../Saved/Saved';
import Applied from '../Applied/Applied';
import NotFound from '../NotFound/NotFound';
import JobDetail from '../JobDetail/JobDetail';
import Values from '../Values/Values';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: 'Your',
      values: 'What are you working for?',
      jobs: [],
      saved: [],
      applied: [],
      error: ''
    }
  }

  componentDidMount() {
    utility.getData('javascript', '1')
    .then(jobData => {
      this.setState({jobs: jobData})
    })
    .then(() => console.log('STATE', this.state))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <>
      <Header user={this.state.user} values={this.state.values}/>
      <Switch>
        {this.state.jobs &&
          <>
            <Route exact path='/' render={() => {
              return <Home jobs={this.state.jobs} saved={this.state.saved} applied={this.state.applied} error={this.state.error}/>
              }} 
            />
            <Route path='/job/:id' render={({match}) => {
              return <JobDetail matchId={match.params.id} jobs={this.state.jobs} />
            }} />
            <Route path='/about' component={About} />
            <Route path='/resources' component={Resources} />
            <Route path='/account' user={this.state.user} component=  {Account}   />
            <Route path='/saved'  render={() => {
              return <Saved jobs={this.state.jobs} saved={this.state.saved} />
              }} 
            />
            <Route path='/applied' render={() => {
              return <Applied jobs={this.state.jobs} applied={this.state.applied} />
              }} 
            />
          </>
        }
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
      </>
    )
  }
}