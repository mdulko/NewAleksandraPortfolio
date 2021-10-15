import React, {lazy, Suspense} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import PageLoader from "../components/small/Loading/Loading";
import ProjectsRoutes from "./projectsRoutes";

const Home = lazy(() => import("../views/Home/Home"));
const About = lazy(() => import("../views/About/About"));
const Contact = lazy(() => import("../views/Contact/Contact"));
const NotFound = lazy(() => import("../views/NotFound/NotFound"));

const Routes = () => (
    <Suspense fallback={<PageLoader/>}>
        <Switch>
            <Redirect from="/:url*(/+)" to={window.location.pathname.slice(0, -1)}/>
            <Route exact path={`/`} component={Home}/>
            <Route path={`/projects`} component={() => <ProjectsRoutes />}/>
            <Route path={`/about`} component={About}/>
            <Route path={`/contact`} component={Contact}/>
            <Route component={NotFound}/>
        </Switch>
    </Suspense>
);

export default Routes;
