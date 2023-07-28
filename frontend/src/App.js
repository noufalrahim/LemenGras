import React from "react";
import ItemProvider from "./components/store/item-provider";
import Card from "./components/UI/Card/Card"
import UserDetails from "./Pages/UserDetails/UserDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/Root";
import CartProvider from "./components/store/Cart-provider";
import ProductDetails from "./Pages/BuyNow/ProductDetails";
import Compose from "./Pages/Compose/Compose";
import Homepage from "./Pages/HomePage/HomePage";
const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout />, children: [
      {index:true, element: <Card /> },
      { path: "/:id/productdetails", element: <ProductDetails/>},
      { path: "/userdetails", element: <UserDetails /> }
    ]
  },
  {
    path: "/compose", element: <Compose/>
  }

])

function App() {
  return (
    <>
    <CartProvider>
      <ItemProvider>
        <RouterProvider router={router} />
      </ItemProvider>
    </CartProvider></>
  )
}

export default App;