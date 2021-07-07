import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CarDetailPage, DashboardPage } from "./pages";
import { AnimateSharedLayout } from "framer-motion";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <AnimateSharedLayout>
      <Switch location={location} key={location.pathname}>
        <Route component={DashboardPage} exact path="/" />
        <Route component={CarDetailPage} path="/car/:id" />
      </Switch>
    </AnimateSharedLayout>
  );
};

export default App;
