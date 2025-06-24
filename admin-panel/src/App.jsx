// src/App.jsx
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductManagementPage from './pages/ProductManagementPage';

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/products",
    element: <ProductManagementPage />,
  },
  // We will add the /blogs route here later
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;