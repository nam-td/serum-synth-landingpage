import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import FAQ from "./pages/FAQ.jsx";
import Products from "./pages/Products.jsx";
import Forum from "./pages/Forum.jsx";
import SerumPacks from "./pages/SerumPacks.jsx";
import Login from "./pages/Login.jsx";
import LegalInfo from "./pages/LegalInfo.jsx";
import Policies from "./pages/Policies.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path:'faq',
        element: <FAQ/>
      },
      {
        path:'products',
        element: <Products />
      },
      {
        path: 'forum',
        element: <Forum />
      },
      {
        path: 'serum-packs',
        element: <SerumPacks />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'legal-info',
        element: <LegalInfo />
      },
      {
        path: 'policies',
        element: <Policies />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path:'*',
        element: <NotFound />
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
