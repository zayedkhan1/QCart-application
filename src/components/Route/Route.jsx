import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Product from "../sharedpage/Product";
import SMain from "../SellerDashboard/SMain";
import SHome from "../SellerDashboard/SHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // ✅ Root route
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/sideLayout",
    element: <SMain />,
  },
  {
    path: "/sideHome",
    element: <SHome />,
  },
  {
    path: "*",
    element: <h1>404 - Page Not Found</h1>, // ✅ Catch-all route
  },
]);

export default router;
