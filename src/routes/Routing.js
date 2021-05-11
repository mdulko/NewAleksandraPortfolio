import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PageLoader from "../components/small/Loading/Loading";
import ProjectsRoutes from "./projectsRoutes";

const Home = lazy(() => import("../views/Home/Home"));
const About = lazy(() => import("../views/About/About"));
const Contact = lazy(() => import("../views/Contact/Contact"));

const NotFound = lazy(() => import("../views/NotFound/NotFound"));

const Routes = ({ ln }) => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Redirect from="/:url*(/+)" to={window.location.pathname.slice(0, -1)} />
      <Route exact path={`/`} component={() => <Home ln={ln} />} />
      <Route path={`/projects`} component={() => <ProjectsRoutes ln={ln} />} />
      <Route path={`/about`} component={() => <About ln={ln} />} />
      <Route path={`/contact`} component={() => <Contact ln={ln} />} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
