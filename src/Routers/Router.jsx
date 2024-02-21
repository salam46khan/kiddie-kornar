
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import AddProduct from '../Pages/AddProduct/AddProduct';
import MyCart from '../Pages/MyCart/MyCart';
import Error from '../Pages/Error/Error';
import Login from '../Shared/Login';
import SignUp from '../Shared/SignUp';
import PrivateRouter from './PrivateRouter';
import Profile from '../Shared/Profile';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-product',
                element: <PrivateRouter> <AddProduct></AddProduct> </PrivateRouter>
            },
            {
                path: '/my-cart',
                element: <PrivateRouter> <MyCart></MyCart> </PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registation',
                element: <SignUp></SignUp>
            },
            {
                path: '/profile',
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            }
        ]
    }
])

export default Router;