import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductManagementPage from './pages/ProductManagementPage';
import BlogManagementPage from './pages/BlogManagementPage';
import { Toaster } from 'react-hot-toast'; // 1. IMPORT the Toaster component

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/products", element: <ProductManagementPage /> },
  { path: "/blogs", element: <BlogManagementPage /> },
]);

function App() {
  return (
    <>
      {/* 2. ADD the Toaster component here */}
      <Toaster 
        position="top-right" // Position the toasts
        toastOptions={{
          // Define default options
          duration: 5000,
          style: {
            background: '#333', // Dark background
            color: '#fff',       // White text
          },
          // Define success/error specific options
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;