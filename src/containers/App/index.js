import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../Homepage";
import Loginpage from "../Loginpage";
import "../../fonts/font-awesome/css/fontawesome-all.css";
import "./index.css";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Loginpage} />
    </Switch>
  );
}
