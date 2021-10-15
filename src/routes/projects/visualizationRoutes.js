import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import PageLoader from "../../components/small/Loading/Loading";

const VisualizationsHome = lazy(() =>
  import("../../views/Visualizations/VisualizationsHome")
);
const Microhome = lazy(() =>
  import("../../views/Visualizations/Microhome/Microhome")
);
const Minilab = lazy(() =>
  import("../../views/Visualizations/Minilab/Minilab")
);
const Zukowo = lazy(() => import("../../views/Visualizations/Zukowo/Zukowo"));

const Fusy = lazy(() => import("../../views/Visualizations/Fusy/Fusy"));


const VisualizationRoutes = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route
        exact
        path={`/projects/visualizations`}
        component={VisualizationsHome}
      />
      <Route
        path={`/projects/visualizations/microhome-2020`}
        component={() => <Microhome />}
      />
      <Route
        path={`/projects/visualizations/minilab`}
        component={() => <Minilab />}
      />
      <Route
        path={`/projects/visualizations/zukowo`}
        component={() => <Zukowo />}
      />
      <Route
          path={`/projects/visualizations/fusy`}
          component={() => <Fusy />}
      />
    </Switch>
  </Suspense>
);

export default VisualizationRoutes;
