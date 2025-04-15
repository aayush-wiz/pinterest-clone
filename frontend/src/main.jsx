import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./routes/homepage/HomePage.jsx";
import CreatePage from "./routes/createpage/CreatePage.jsx";
import PostPage from "./routes/postpage/PostPage.jsx";
import AuthPage from "./routes/authpage/AuthPage.jsx";
import SearchPage from "./routes/searchpage/SearchPage.jsx";
import MainLayout from "./routes/layouts/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/pins/:id" element={<PostPage />} />
          <Route path="/:username" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
