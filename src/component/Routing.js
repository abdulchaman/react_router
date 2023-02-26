import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Post from "./Post";
import Profile from "./Profile";
import postDetails from './postDetails';
const Routing = ()=>{
    return(
        <BrowserRouter>
            <Header></Header>
            <div className="container">
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/post" component={Post}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/post/:topic" component={postDetails}></Route>
            </div>
            <Footer year="2020"></Footer>
        </BrowserRouter>
    )
}
export default Routing;