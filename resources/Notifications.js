import React from 'react';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';

const Notifications = () => {
  return (
    <>
      <AdminNavbar />
      
      <section className="p5 text-center py-5" style={{ marginTop: '50px' }}>
        <h1>Notifications</h1>
        {/* Add your notifications functionality here */}
      </section>

      <Footer />
    </>
  );
};

export default Notifications;