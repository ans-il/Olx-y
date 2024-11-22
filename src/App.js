import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { authContext, firebaseContext } from './store/Context';
import PostContext from './store/PostContext'
import './App.css';


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import SignUp from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'

function App() {
 const {setUser} = useContext(authContext)
 const{firebase} = useContext(firebaseContext)
 
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => setUser(user))
 }, [])



  return (
    <div>
      <PostContext>
      <Router>       
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path='/sell'>
        <Create/>
        </Route> 
        <Route path='/view-post'>
        <View/>
        </Route>             
      </Router>
      </PostContext>
    </div>
  );
}

export default App;
