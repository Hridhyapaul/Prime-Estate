import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import About from '../pages/About';
import Profile from '../pages/Profile';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/sign-in",
      element: <SignIn></SignIn>,
    },
    {
      path: "/sign-up",
      element: <SignUp></SignUp>,
    },
    {
      path: "/about",
      element: <About></About>,
    },
    {
      path: "/profile",
      element: <Profile></Profile>,
    },
  ]);

export default router;