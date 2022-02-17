import Navbar from "./components/navbar/Navbar";

import "./app.css"
import Home from "./components/page/Home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/userList/UserList";




function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/users"><UserList/></Route>
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
