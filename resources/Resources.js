import React from 'react';

const Resources = () => {
  return (
    <section className="p-5 text-center text-lg-start" style={{ marginTop: '70px' }}>
      <div className="container">
        <h2 className="pb-5">Want help with your project?</h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
          {/* Add the resource cards */}
          <div className="col">
            <div className="card pt-2">
              <img src="img/pdf.jpg" className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h6 className="card-title">Individual Cover Page</h6>
                <a href="#!" className="btn btn-primary">Download</a>
              </div>
            </div>
          </div>
          {/* Add the remaining resource cards */}
        </div>
      </div>
    </section>
  );
};

export default Resources;