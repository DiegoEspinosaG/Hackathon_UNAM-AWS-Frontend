import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { PublicLayout } from "./layouts";
import Login from "./views/Login";

export default [
  {
    path: "/",
    exact: true,
    layout: PublicLayout,
    component: () => < Redirect to ="/login"/>
  },{
    path: "/login",
    layout: PublicLayout,
    component: Login
  },
];
