import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Changepassword from "./Changepassword";
import Forgotpassword from "./Forgotpassword";
import Delete from "./Delete";
import Logout from "./Logout";
import Profile from "./Profile";
import Todo from "./Todo";
import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

function App()
{
return(
  <>
  <Router>
      <Link to = "/"> Home ||</Link>
      <Link to = "/Signup"> Signup|| </Link>
      <Link to = "/Login"> Login|| </Link>
      <Link to = "/Changepassword"> Changepassword|| </Link>
      <Link to = "/Forgotpassword"> Forgotpassword ||</Link>
      <Link to = "/Profile"> Profile ||</Link>
      <Link to = "/Delete"> Delete ||</Link>
      <Link to = "/Logout"> Logout ||</Link>
      <Link to = "/Todo"> Todo ||</Link>

     <Routes>
      {/* <Route path="/" element= {<App/>}/> */}
      <Route path="/Signup" element= {<Signup/>}/>
      <Route path="/Login" element= {<Login/>}/>
       <Route path="/Changepassword" element= {<Changepassword/>}/>
       <Route path="/Forgotpassword" element= {<Forgotpassword/>}/> 
       <Route path="/Profile" element= {<Profile/>}/> 
       <Route path="/Delete" element= {<Delete/>}/> 
       <Route path="/Logout" element= {<Logout/>}/> 
       <Route path="/Todo" element= {<Todo/>}/> 
      </Routes> 

  </Router>
  </>

)

}
 export default App

  

  


