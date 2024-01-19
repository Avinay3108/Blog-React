import React from "react";
import { BrowserRouter , Route,Switch } from "react-router-dom";
import Topbar from "./topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Setting from "./pages/settings/Setting";
import Write from "./pages/write/Write";
import Register from "./post/register/Register";
import Single from "./single/Single";


function App() {
  const currentUser = true;

  return (
    <BrowserRouter>
    <Topbar />
    <Switch>
      <Route path="/post" component={Home} />
      <Route
        path="/register"
        render={() => (currentUser ? <Home /> : <Register />)}
      />
      <Route path="/login" render={() => (currentUser ? <Home /> : <Login />)} />
      <Route path="/post/:postId" component={Single} />
      <Route path="/write" render={() => (currentUser ? <Write /> : <Login />)} />
      <Route path="/settings" render={() => (currentUser ? <Setting /> : <Login />)} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
  
  );
}

export default App;
