import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Root from "./pages/Root";
// import Planned from "./pages/Planned";
// import Favorite from "./pages/Favorite";
// import Watched from "./pages/Watched";
import ErrorPage from "./pages/ErrorPage";
import Navigation from "./components/Navigation";
import React from "react";
import ReactDOM from "react-dom";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/planned",
  //   element: <Planned />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/favorite",
  //   element: <Favorite />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/watched",
  //   element: <Watched />,
  //   errorElement: <ErrorPage />,
  // },
]);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <RouterProvider router={router} />
      <Outlet />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
