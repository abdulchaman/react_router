import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Post from "./Post";
import Profile from "./Profile";
const Routing = ()=>{
    return(
        <BrowserRouter>
            <Header></Header>
            <div className="container">
            <Route exact path="/" component={Home}></Route>
            <Route path="/post" component={Post}></Route>
            <Route path="/profile" component={Profile}></Route>
            </div>
            <Footer></Footer>
        </BrowserRouter>
    )
}
export default Routing;