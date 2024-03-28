import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

import Root from "./pages/Root";
// import Planned from "./pages/Planned";
// import Favorite from "./pages/Favorite";
// import Watched from "./pages/Watched";
import ErrorPage from "./pages/ErrorPage";

const queryClient = new QueryClient();

const router = (
  <Routes>
    <Route path="/" element={<Root />} />
    {/* <Route path="/planned" element={<Planned />} />
    <Route path="/favorite" element={<Favorite />} />
    <Route path="/watched" element={<Watched />} /> */}
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>{router}</Router>
    </QueryClientProvider>
  </React.StrictMode>
);