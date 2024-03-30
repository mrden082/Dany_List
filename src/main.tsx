import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

import Root, { loader as rootLoader } from "./pages/Root";
import Planned from "./pages/Planned";
import Favorite from "./pages/Favorite";
import Watched from "./pages/Watched";
import ErrorPage from "./pages/ErrorPage";
import AnimeInfoPage from "./pages/AnimeIfoPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "/animeInfoPage",
        element: <AnimeInfoPage />,
      },
    ],
  },
  {
    path: "/planned",
    element: <Planned />,
    loader: rootLoader,
  },
  {
    path: "/favorite",
    element: <Favorite />,
    loader: rootLoader,
  },
  {
    path: "/watched",
    element: <Watched />,
    loader: rootLoader,
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
