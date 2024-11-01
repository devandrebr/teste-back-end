import {createBrowserRouter} from 'react-router-dom';
import Login from './views/login.jsx';
import GuestLayout from './components/GuestLayout.jsx';
import DefaultLayout from './components/DefaultLayout.jsx';
import Categories from './views/categories.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/categorias',
                element: <Categories />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
]);

export default router;