import React from "react";
import { Route } from 'react-router';
import Home from "./home";
import About from "./about";
import { withDrawerAndTitleBar } from '../layout/DrawerAndTitleBar';

const HomePage = withDrawerAndTitleBar(Home);
const AboutPage = withDrawerAndTitleBar(About);

export const AppRoutes: React.SFC = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </>
  );
}