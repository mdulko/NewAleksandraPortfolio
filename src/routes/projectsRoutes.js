import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import PageLoader from "../components/small/Loading/Loading";
import VisualizationRoutes from "./projects/visualizationRoutes";
import FurnituresRoutes from "./projects/furnituresRoutes";
import OtherRoutes from "./projects/otherRoutes";
import RoomsRoutes from "./projects/roomsRoutes";

const Projects = lazy(() => import("../views/ProjectsHome/ProjectsHome"));

const ProjectsRoutes = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route exact path={`/projects`} component={Projects} />
      <Route
        path={`/projects/visualizations`}
        component={() => <VisualizationRoutes/>}
      />
      <Route
        path={`/projects/furnitures`}
        component={() => <FurnituresRoutes />}
      />
      <Route
        path={`/projects/other`}
        component={() => <OtherRoutes />}
      />
      <Route
        path={`/projects/rooms`}
        component={() => <RoomsRoutes />}
      />
    </Switch>
  </Suspense>
);

export default ProjectsRoutes;
