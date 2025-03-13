import {createBrowserRouter} from "react-router";
import {Catalog} from "@/pages/Catalog";
import {Cart} from "@/pages/Cart";
import {CheckoutPage} from "@/pages/CheckoutPage";
import {Header} from "@/pages/Header";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Header/>,
        children: [
            {
                path: '/',
                element: <Catalog/>,
            },
            {
                path: '/catalog',
                element: <Catalog/>,
            },
            {
                path: '/cart',
                element: <Cart/>,
            },
            {
                path: '/checkoutPage',
                element: <CheckoutPage/>,
            },
            {
                path: '*',
                element: <h1>Пошел нахуй</h1>,
            },
        ]
    }])


export default routes