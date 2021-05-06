import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import PageLoader from "../../components/small/Loading/Loading";

const VisualizationsHome = lazy(() => import("../../views/Rooms/RoomsHome"));
const ReadingRoom = lazy(() =>
  import("../../views/Rooms/ReadingRoom/ReadingRoom")
);
const KitchenTemplate1 = lazy(() =>
  import("../../views/Rooms/KitchenTemplate1/KitchenTemplate1")
);
const KitchenTemplate2 = lazy(() =>
  import("../../views/Rooms/KitchenTemplate2/KitchenTemplate2")
);

const RoomsRoutes = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route exact path={`/projects/rooms`} component={VisualizationsHome} />
      <Route path={`/projects/rooms/reading-room`} component={ReadingRoom} />
      <Route
        path={`/projects/rooms/kitchen-template-1`}
        component={KitchenTemplate1}
      />
      <Route
        path={`/projects/rooms/kitchen-template-2`}
        component={KitchenTemplate2}
      />
    </Switch>
  </Suspense>
);

export default RoomsRoutes;
