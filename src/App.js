import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import View from "./pages/view/View";
import Join from "./pages/join/Join";
import Mypage from "./pages/mypage/Mypage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/view">
          <View />
        </Route>
        <Route path="/join">
          <Join />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
