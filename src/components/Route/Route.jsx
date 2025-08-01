import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Product from "../sharedpage/Product";
import SMain from "../SellerDashboard/SMain";
import SHome from "../SellerDashboard/SHome";

const router = createBrowserRouter(
    [

        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/shop',
            element: <Shop></Shop>
        },
        {
            path: '/product/:id',
            element: <Product></Product>
        },
        {
            path: '/sideLayout',
            element: <SMain></SMain>,
        },
        {
            path: '/sideHome',
            element: <SHome></SHome>
        },

    ]
)
export default router;