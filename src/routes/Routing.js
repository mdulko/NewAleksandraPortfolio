import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PageLoader from "../../components/small/Loading/Loading";

const Home = lazy(() => import("views/Home/Home"));
const NotFound = lazy(() => import("views/NotFound/NotFound"));

const Routes = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Redirect from="/:url*(/+)" to={window.location.pathname.slice(0, -1)} />
      <Route exact path={`/`} component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
