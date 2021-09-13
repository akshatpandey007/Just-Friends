import React from 'react';
import { Navbar } from './Components/Navbar';
import { AuthProvider, useAuthUser } from './Context';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { HomePage } from './Components/HomePage';
import { Login } from './Components/Login';
import { ProfileHome } from './Components/ProfileHome';
import { SignUp } from './Components/Signup';


const routes = [
  {
    id : 0,
    path : '/',
    component : <HomePage />,
    isPrivate : false
  },
  {
    id : 1,
    path : '/login',
    component : <Login />,
    isPrivate : false
  },
  {
    id : 2,
    path : '/signup',
    component : <SignUp />,
    isPrivate : false
  },
  {
    id : 3,
    path : '/profilehome',
    component : <ProfileHome />,
    isPrivate : true
  }
]


function App() {

  return (
    <AuthProvider>
      <Router>
      <div style={{margin:'0px',padding:'0px',height:'100vh'}}> 
        <Navbar />
        <Switch>
            <Route exact path ="/" ><HomePage /></Route>
            <Route  path ="/login" ><Login /></Route>
            <Route  path ="/signup" ><SignUp /></Route>
            <Route  path ="/profilehome" ><ProfileHome /></Route>
            {/* TODO : private routing */}
        </Switch>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
