import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import App from "./App";
import CartPage from "./features/Cart";
import {store} from "./store/store"
import ProductsPage from "./features/Products";
import Home from "./components/Home";
const router=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
    {
       path:"/",
       element:<Home></Home>
    },
    {
    path:"/cart",
    element:<CartPage></CartPage>
    },
    {
    path:"/products",
    element:<ProductsPage></ProductsPage>
    },
   ]
  }
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
     <RouterProvider router={router}></RouterProvider>
  </Provider>
);