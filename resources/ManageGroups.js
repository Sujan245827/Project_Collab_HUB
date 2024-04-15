import React from 'react';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';

const ManageGroups = () => {
  return (
    <>
      <AdminNavbar />
      
      <section className="p5 text-center py-5" style={{ marginTop: '50px' }}>
        <h1>Manage Groups</h1>
        {/* Add your manage groups functionality here */}
      </section>

      <Footer />
    </>
  );
};

export default ManageGroups;