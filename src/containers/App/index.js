import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../Homepage";
import Loginpage from "../Loginpage";
import Adminpage from "../Adminpage";
import AdminGiftpage from "../AdminGiftpage";
import AdminDriverpage from "../AdminDriverpage";
import AdminGiftDetailpage from "../AdminGiftDetailpage";
import "../../fonts/font-awesome/css/fontawesome-all.css";
import "./style.bundle.css";
import "./index.css";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Loginpage} />
      <Route exact path="/admin" component={Adminpage} />
      <Route exact path="/admin/gift" component={AdminGiftpage} />
      <Route path="/admin/gift/:id" component={AdminGiftDetailpage} />
      <Route path="/admin/gift/new" component={AdminGiftDetailpage} />
      <Route exact path="/admin/driver" component={AdminDriverpage} />
    </Switch>
  );
}
