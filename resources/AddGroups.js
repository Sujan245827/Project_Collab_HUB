import React from 'react';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';

const AddGroups = () => {
  return (
    <>
      <AdminNavbar />
      
      <section className="p5 text-center py-5" style={{ marginTop: '50px' }}>
        <h1>Add Groups</h1>
        {/* Add your add groups form here */}
      </section>

      <Footer />
    </>
  );
};

export default AddGroups;