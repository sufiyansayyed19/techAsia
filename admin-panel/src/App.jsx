// src/App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductManagementPage from './pages/ProductManagementPage';
import BlogManagementPage from './pages/BlogManagementPage'; // <-- Import new page

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/products", element: <ProductManagementPage /> },
  { path: "/blogs", element: <BlogManagementPage /> }, // <-- Add new route
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;