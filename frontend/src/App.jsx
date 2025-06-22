import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Navbar />
        <main>
          <Outlet /> 
        </main>
      <Footer />
    </>
  );
}

export default App;