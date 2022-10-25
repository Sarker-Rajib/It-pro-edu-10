import { createBrowserRouter } from 'react-router-dom';
import Error404 from '../../Pages/Error404/Error404';
import Main from '../../Layouts/Main/Main';
import Home from '../../Pages/Home/Home';
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register';
import Blog from '../../Pages/Blog/Blog';
import Faq from '../../Components/Faq/Faq';

export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/home',
            element: <Home></Home>
         },
         {
            path: '/courses',
            element: <>courses</>
         },
         {
            path: '/faq',
            element: <Faq></Faq>
         },
         {
            path: '/blog',
            element: <Blog></Blog>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         }
      ]
   },
   {
      path: '*',
      element: <Error404></Error404>
   }
]);