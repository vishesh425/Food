import Home from './component/home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Nav  from './component/nav'

function App() {
  return (
       <Router>
       <div>
           {/* <ul>
               <li>
                   <Link to="/">Home</Link>
               </li>
               <li>
                   <Link to="/about">
                       About Us
                   </Link>
               </li>
               <li>
                   <Link to="/contact">
                       Contact Us
                   </Link>
               </li>
           </ul> */}
           <Nav/>
           <Routes>
               <Route
                   exact
                   path="/"
                   element={<Home />}
               ></Route>
               <Route
                   exact
                   path="/index"
                   element={<Home />}
               ></Route>
               <Route
                   exact 
                   path="/home"
                   element={<Home />}
               ></Route>
                   <Route
                   exact 
                   path="/Food"
                   element={<Home />}
               ></Route>
           </Routes>
       </div>
   </Router>
  );
}

export default App;
