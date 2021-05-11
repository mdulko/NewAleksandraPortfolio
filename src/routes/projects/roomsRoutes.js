import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import PageLoader from "../../components/small/Loading/Loading";

const RoomsHome = lazy(() => import("../../views/Rooms/RoomsHome"));
const ReadingRoom = lazy(() =>
  import("../../views/Rooms/ReadingRoom/ReadingRoom")
);
const KitchenTemplate1 = lazy(() =>
  import("../../views/Rooms/KitchenTemplate1/KitchenTemplate1")
);
const KitchenTemplate2 = lazy(() =>
  import("../../views/Rooms/KitchenTemplate2/KitchenTemplate2")
);

const RoomsRoutes = ({ ln }) => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route exact path={`/projects/rooms`} component={RoomsHome} />
      <Route
        path={`/projects/rooms/reading-room`}
        component={() => <ReadingRoom ln={ln} />}
      />
      <Route
        path={`/projects/rooms/kitchen-design-1`}
        component={() => <KitchenTemplate1 ln={ln} />}
      />
      <Route
        path={`/projects/rooms/kitchen-design-2`}
        component={() => <KitchenTemplate2 ln={ln} />}
      />
    </Switch>
  </Suspense>
);

export default RoomsRoutes;
