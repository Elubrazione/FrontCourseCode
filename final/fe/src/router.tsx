import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import StuSingle from "./pages/StuSingle/StuSingle";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "detail",
    element: <StuSingle />,
    errorElement: <NotFound />,
  },
  {
    path: "system",
    element: <Main />,
    errorElement: <NotFound />,
  },
]);

export default router;
