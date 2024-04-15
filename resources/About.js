import React from 'react';

const About = () => {
  return (
    <section className="p5 text-center text-lg-start py-5" style={{ marginTop: '70px' }}>
      <div className="container">
        <div className="row align-items-center justify-content-between pb-5">
          <div className="col-md pt-2 pt-sm-4 pt-md-0 text-lg-right">
            <h2 className="textcolor pb-3">What is Project Collab Hub?</h2>
            <p className="lead">
              Project Collab hub is a platform that helps Students, Instructors and Groups in project collaboration.
            </p>
            <p className="lead">
              It serves as a centralized hub where individuals and teams can come together to share ideas, coordinate efforts, and manage project tasks effectively. For students, it offers a structured environment for organizing group work, facilitating communication, and accessing resources essential for successful project completion.
            </p>
            <p className="lead">
              Instructors benefit from features tailored to streamline project supervision, enabling them to monitor progress, provide guidance, and assess individual and group contributions.
            </p>
            <p className="lead">
              Project Collab Hub fosters a sense of community and teamwork by promoting interaction and knowledge exchange among users, ultimately enhancing the collaborative learning experience and empowering participants to achieve their project goals with confidence.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <div className="accordion accordion-flush" id="questions">
          {/* Add the FAQ accordion items */}
        </div>
      </div>
      <div className="pb-3"></div>
    </section>
  );
};

export default About;