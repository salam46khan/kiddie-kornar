
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
import ProductDetails from '../Shared/ProductDetails';
import UpdateProduct from '../Components/UpdateProduct';

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
            },
            {
                path: '/product/:id',
                element:<PrivateRouter> <ProductDetails></ProductDetails> </PrivateRouter> 
            },
            {
                path: 'myproduct/:id',
                element: <PrivateRouter> <UpdateProduct></UpdateProduct> </PrivateRouter>
            }
        ]
    }
])

export default Router;