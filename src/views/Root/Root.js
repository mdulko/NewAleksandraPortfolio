import React from "react";

import { Router } from "react-router-dom";
import MainTemplate from "../../templates/MainTemplate";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Root = () => {
  return (
    <Router history={history}>
      <MainTemplate></MainTemplate>
    </Router>
  );
};

export default Root;
