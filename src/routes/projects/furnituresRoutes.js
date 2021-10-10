import React, {lazy, Suspense} from "react";
import {Switch, Route} from "react-router-dom";
import PageLoader from "../../components/small/Loading/Loading";

const FurnituresHome = lazy(() =>
    import("../../views/Furnitures/FurnituresHome")
);
const CoffeeTable = lazy(() =>
    import("../../views/Furnitures/CoffeeTable/CoffeeTable")
);
const SimpleSeat = lazy(() =>
    import("../../views/Furnitures/SimpleSeat/SimpleSeat")
);
const TearSeat = lazy(() => import("../../views/Furnitures/TearSeat/TearSeat"));

const Harmony = lazy(() => import("../../views/Furnitures/Harmony/Harmony"));

const FurnituresRoutes = ({ln}) => (
    <Suspense fallback={<PageLoader/>}>
        <Switch>
            <Route exact path={`/projects/furnitures`} component={FurnituresHome}/>
            <Route
                path={`/projects/furnitures/coffee-table`}
                component={() => <CoffeeTable ln={ln}/>}
            />
            <Route
                path={`/projects/furnitures/simple-seat`}
                component={() => <SimpleSeat ln={ln}/>}
            />
            <Route
                path={`/projects/furnitures/tear-seat`}
                component={() => <TearSeat ln={ln}/>}
            />
            <Route
                path={`/projects/furnitures/harmony`}
                component={() => <Harmony ln={ln}/>}
            />
        </Switch>
    </Suspense>
);

export default FurnituresRoutes;
