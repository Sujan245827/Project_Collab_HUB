import React from 'react';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';

const AddInstructors = () => {
  return (
    <>
      <AdminNavbar />
      
      <section className="p5 text-center py-5" style={{ marginTop: '50px' }}>
        <h1>Add Instructors</h1>
        {/* Add your add instructors form here */}
      </section>

      <Footer />
    </>
  );
};

export default AddInstructors;