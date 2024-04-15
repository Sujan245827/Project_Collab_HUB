import React from 'react';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';

const ManageProjects = () => {
  return (
    <>
      <AdminNavbar />
      
      <section className="p5 text-center py-5" style={{ marginTop: '50px' }}>
        <h1>Manage Projects</h1>
        {/* Add your manage projects functionality here */}
      </section>

      <Footer />
    </>
  );
};

export default ManageProjects;