import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import PageLoader from "../../components/small/Loading/Loading";

const OtherProjectsHome = lazy(() =>
  import("../../views/OtherProjects/OtherProjectsHome")
);
const DecorativeWall = lazy(() =>
  import("../../views/OtherProjects/DecorativeWall/DecorativeWall")
);

const OtherRoutes = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route exact path={`/projects/other`} component={OtherProjectsHome} />
      <Route
        path={`/projects/other/decorative-wall-Magia`}
        component={DecorativeWall}
      />
    </Switch>
  </Suspense>
);

export default OtherRoutes;
