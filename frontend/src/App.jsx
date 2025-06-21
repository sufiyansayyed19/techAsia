// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    // This is our main layout structure
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This is where the current page's content will be rendered */}
      </main>
      <Footer />
    </>
  );
}

export default App;