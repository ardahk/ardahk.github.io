import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/home';
import './index.css';
import ProjectPage from './pages/projects';
import 'bootstrap/dist/css/bootstrap.min.css';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route index element={<HomePage />} />
    <Route path="/projects" element={<ProjectPage />} />
  </Route>
));

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);