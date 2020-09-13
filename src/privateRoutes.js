import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { PrivateLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";


export default [
  {
    path: "/",
    exact: true,
    layout: PrivateLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: PrivateLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: PrivateLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: PrivateLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: PrivateLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: PrivateLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: PrivateLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: PrivateLayout,
    component: BlogPosts
  }
];
