/* @refresh reload */
import { render } from "solid-js/web";

import Index from "./pages/Index";
import "./index.css";
import { Route, Router } from "@solidjs/router";
import { lazy } from "solid-js";

const App = lazy(() => import("./pages/App"));

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Route path={"/"} component={Index} />
      <Route path={"/test"} component={App} />
      <Route path={"/profile"} component={Index} />
      <Route path={"/login"} component={Index} />
    </Router>
  ),
  root!
);
