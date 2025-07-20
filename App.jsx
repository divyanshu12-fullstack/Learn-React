import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ErrorPage from "./src/components/ErrorPage";
import RestaurantMenu from "./src/components/RestaurantMenu";
import React, { lazy, Suspense } from "react";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const Grocery = lazy(() => import("./src/components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/city/lucknow/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
