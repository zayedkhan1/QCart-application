import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SHome from './SHome';
import SNavbar from './SNavbar';
import Footer from '../sharedpage/Footer';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar - fixed at top */}
      <SNavbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Sidebar - fixed below navbar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />


      {/* Main content - offset for navbar and sidebar */}
      <div className={` transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'md:ml-64'}`}>
        <SHome></SHome>
      </div>
    </div>
  );
}

export default App;