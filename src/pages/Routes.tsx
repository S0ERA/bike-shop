import {createBrowserRouter} from "react-router";
import {Catalog} from "./Catalog.tsx";
import {Cart} from "./Cart.tsx";
import {CheckoutPage} from "./CheckoutPage.tsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Catalog />,
    },
    {
        path: '/catalog',
        element: <Catalog />,
    },
    {
        path: '/cart',
        element: <Cart />,
    },
    {
        path: '/checkoutPage',
        element: <CheckoutPage />,
    },
    {
        path: '*',
        element: <h1>Пошел нахуй</h1>,
    },
    ])


export default routes