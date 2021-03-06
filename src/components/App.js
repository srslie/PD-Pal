import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Redirect} from 'react-router-dom';
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

export default function App() {

  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/job/:id' render={({match}) => {
        return <JobDetail id={match.params.id} />
      }} />
      <Route path='/about' component={About} />
      <Route path='/resources' component={Resources} />
      <Route path='/account' component={Account} />
      <Route path='/saved' component={Saved} />
      <Route path='/applied' component={Applied} />
    </Switch>
    <Route path="/404" component={NotFound} />
    <Redirect to="/404" />
    <Footer />
    </>
  );
}

