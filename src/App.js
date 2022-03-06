import Navbar from "./components/navbar/Navbar";

import "./app.css"
import Home from "./components/page/Home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/userList/UserList";
import User from "./components/user/User";
import CreateUser from "./components/page/createUser/CreateUser";
import ProductList from "./components/page/productList/ProductList";
import Product from "./components/page/product/Product";
import CreateProduct from "./components/page/createProduct/CreateProduct";




function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/users"><UserList/></Route>
          <Route path="/user/:userId"><User/></Route>
          <Route path="/createUser"><CreateUser/></Route>
          <Route path="/products"><ProductList/></Route>
          <Route path="/product/:productId"><Product/></Route>
            <Route path="/createProduct"><CreateProduct/></Route>
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
