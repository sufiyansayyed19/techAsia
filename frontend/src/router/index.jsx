import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import BlogsPage from '../pages/BlogsPage';
import AboutPage from '../pages/AboutPage';
import DigitalCardPage from '../pages/DigitalCardPage';
import EngineeringProjectsPage from '../pages/EngineeringProjectsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      
      {
        path: 'digital-business-card',
        element: <DigitalCardPage />,
      },
      {
        path: 'blogs',
        element: <BlogsPage />,
      },
      
      {
        path: 'engineering-projects',
        element: <EngineeringProjectsPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);