import React from 'react';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';

const AddProjects = () => {
  return (
    <>
      <AdminNavbar />
      
      <section className="p5 text-center py-5" style={{ marginTop: '50px' }}>
        <h1>Add Projects</h1>
        {/* Add your add projects form here */}
      </section>

      <Footer />
    </>
  );
};

export default AddProjects;