import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home";
import Campgrounds from "./components/pages/campgrounds";
import AddCampgroundForm from "./components/pages/addCampgroundForm";
import oneCampground from "./components/pages/oneCampground";


function App() {
    return (
        <Router>
            <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/campgrounds" component={Campgrounds} />
                <Route exact path="/campgrounds/new" component={AddCampgroundForm} />
                <Route path="/campgrounds/:id" component={oneCampground} />
            </Switch>
            </div>
        </Router>
    );
}
export default App;