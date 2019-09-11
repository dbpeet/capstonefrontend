import React from 'react';
// import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
// import Profile from '../components/Profile/Profile';
import ProfileContainer from '../containers/ProfileContainer'
import HomeContainer from '../containers/HomeContainer'

//import Home from '../pages/Home/Home';

const Path = ({ setCurrentUser, currentUser, history }) => {
  return(
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route path='/login' render={() => <Login history={history} setCurrentUser={setCurrentUser} />} />
      <Route path='/register' component={Register} />
      <Route exact path='/profile' component={ProfileContainer} />
      <Route path='/profile/:pid' component={ProfileContainer}/>
    </Switch>
  )
}

export default withRouter(Path);
