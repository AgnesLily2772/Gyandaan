import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import SignUp from './Components/Signup/Signup';
import SignIn from './Components/Signin/Signin';
import Profile from './Components/Profile/Profile';
const App = () => {
  return (     
    <>   
         <Router>
         <Header/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/signup" exact element={<SignUp/>}/>
        <Route path="/signin" exact element={<SignIn/>}/>
        <Route path="/profile" exact element={<Profile/>}/>
        </Routes>
        </Router>
        </>
  );
};

export default App;

