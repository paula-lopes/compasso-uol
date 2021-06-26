import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import ReposListPage from "pages/ReposListPage/ReposListPage";
import StarredsListPage from "pages/StarredsListPage/StarredsListPage";
import ErrorPage from "pages/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/repos">
          <ReposListPage />
        </Route>
        <Route exact path="/starreds">
          <StarredsListPage />
        </Route>
        <Route exact path="/error">
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
