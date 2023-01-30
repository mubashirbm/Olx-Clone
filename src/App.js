import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router ,Route} from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
// import Signup from './Pages/Signup'
import './App.css';


/**
 * ?  =====Import Components=====
 */
import { AuthContext, FirebaseContext } from './Store/Context';
import Post from './Store/PostContext';

import Home from './Pages/Home';
import ViewPost from './Pages/ViewPost';

function App() {
 const {user,setUser} = useContext (AuthContext)
 const {firebase} =useContext(FirebaseContext)

 useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })
  console.log(user);
 })
  return (
    <div>
      <Post>
          <Router>
            <Route exact path='/'>
            <Home />
            </Route>
            <Route path='/Signup'>
              
            <Signup />
            </Route>
            <Route path='/Login'>
              <Login />
            </Route>
            <Route path='/Create'>
              <Create />
            </Route>
            <Route path='/view'>
              <ViewPost />
            </Route>
        
          </Router>
      </Post>
    </div>
  );
}

export default App;
