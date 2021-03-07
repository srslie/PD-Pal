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
    this.updateProperty = this.updateProperty.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  componentDidMount() {
    utility.getData('javascript', '1')
    .then(jobData => {
      this.setState({jobs: jobData})
    })
    .then(() => {
      const storedValues = JSON.parse(localStorage.getItem('values'))
      const storedUser = JSON.parse(localStorage.getItem('user'))
      if (storedValues) {
        this.setState({values: storedValues})
      }
      if (storedUser) {
        this.setState({user: storedUser})
      }
    })
    .then(() => console.log('STATE', this.state))
    .catch(error => console.log(error))
  }

  updateProperty(id, property) {
    localStorage.removeItem(`${property}`);
    if (this.state[property].includes(id)) {
      let copy = this.state[property]
      let index = copy.indexOf(id)
      copy.splice(index, 1)
      this.setState({[property]: copy})
      localStorage.setItem(`${property}`, JSON.stringify(copy))
    } else {
      this.setState({[property]: [...this.state[property], id]})
      localStorage.setItem(`${property}`, JSON.stringify([...this.state[property], id]))
    }
  }

  updateText(text, property) {
    localStorage.removeItem(`${property}`)
    this.setState({[property]: text})
    localStorage.setItem(`${property}`, JSON.stringify(text))
  }

  render() {
    return (
      <>
      <Header user={this.state.user} values={this.state.values} />
      <Switch>
        {this.state.jobs &&
          <>
            <Route exact path='/' render={() => {
              return <Home jobs={this.state.jobs} saved={this.state.saved} applied={this.state.applied} error={this.state.error}/>
              }} 
            />
            <Route path='/job/:id' render={({match}) => {
              return <JobDetail matchId={match.params.id} jobs={this.state.jobs} updateProperty={this.updateProperty}/>
            }} />
            <Route path='/about' component={About} />
            <Route path='/resources' component={Resources} />
            <Route path='/account' render={() => {
              return <Account user={this.state.user} values={this.state.values} updateText={this.updateText}/>
              }} 
            />
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