import './App.css';
import PostAPIReact from './PostAPIReact';
import Conditional from './Conditional';
import UserDetails from './UserDetails';
import Login from './Login';
import GetAPI from './GetAPI';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './Register';
import Update from './Update';
import Delete from './Delete';



const App = () => {
  return (
    <>
    {/* Write down navigation below for each URL */}
    
    <Router>
      <Routes>
        <Route path = "/PostAPIReact" element = {<PostAPIReact/>}/>
        <Route path = "/GetAPI" element = {<GetAPI/>}/>
        <Route path = "/Conditional" element = {<Conditional/>}/>
        <Route path = "/UserDetails" element = {<UserDetails/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/Register" element = {<Register/>}/>
        <Route path = "/Update" element = {<Update/>}/>
        <Route path = "/Delete" element = {<Delete/>}/>
        <Route path = "/Delete" element = {<Delete/>}/>

        
    {/* Route path is to connect the URL to the end */}
    
    {/* Below on line 26, it will bring you to Home page as you start the react application */}
    <Route path = "/" element = {<PostAPIReact/>}/>
    {/* <Route path = "/" element = {<About/>}/> */}
    </Routes>
 
    </Router>

    </>
   
  );
}

export default App;
