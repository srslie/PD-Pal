import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import utility from '../utility'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Resources from './Resources';
import Account from './Account';
import Saved from './Saved';
import Applied from './Applied';
import NotFound from './NotFound';
import JobDetail from './JobDetail';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: 'Your',
      values: '',
      jobs: [],
      saved: [],
      applied: [],
      error: ''
    }
  }

  componentDidMount() {
    utility.getData()
    .then(jobData => {
      this.setState({jobs: jobData})
    })
    .then(() => console.log(this.state))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <>
      <Header />
      <Switch>
        {this.state.jobs &&
          <>
            <Route exact path='/' render={() => {
              return <Home jobs={this.state.jobs} saved={this.state.saved}    applied={this.state.applied} error={this.state.error}/>
              }} 
            />
            <Route path='/job/:id' render={({match}) => {
              return <JobDetail id={match.params.id} />
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