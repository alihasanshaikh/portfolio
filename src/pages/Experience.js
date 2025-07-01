import React from "react";
import Resume from "../components/Resume";

const Experience = () => {
  const certificates = [
    {
      id: "03",
      title: "E-Commerce Portal Development",
      issuer: "MERN Stack Certification",
      date: "2023",
      icon: "bi-cart-fill",
      color: "success",
      description:
        "Certified in MERN stack web development, specializing in creating and maintaining e-commerce portal web applications with expertise in MongoDB, Express.js, React.js, and Node.js.",
    },
    {
      id: "04",
      title: "Interactive Dice Game Development",
      issuer: "JavaScript Advanced Certification",
      date: "2023",
      icon: "bi-dice-6-fill",
      color: "warning",
      description:
        "Certification obtained for advanced JavaScript-based dice game web application. Demonstrating proficiency in developing interactive and engaging gaming experiences using JavaScript and related technologies.",
    },
    {
      id: "05",
      title: "Music Player Application",
      issuer: "Web Audio API Certification",
      date: "2023",
      icon: "bi-music-note-beamed",
      color: "info",
      description:
        "Certification of music player web application in advanced JavaScript. Verified proficiency in developing interactive and seamless music players, utilizing advanced JavaScript techniques for enhanced user experience.",
    },
    {
      id: "06",
      title: "Netflix Clone Frontend",
      issuer: "Frontend Development Certification",
      date: "2023",
      icon: "bi-play-circle-fill",
      color: "danger",
      description:
        "Certification received for creating a Netflix clone web application using HTML and CSS, demonstrating proficiency in frontend development and UI design.",
    },
    {
      id: "07",
      title: "Aptitude Test Excellence",
      issuer: "Technical Assessment",
      date: "2023",
      icon: "bi-trophy-fill",
      color: "primary",
      description:
        "Certificate of excellence in technical aptitude test, demonstrating strong problem-solving skills and logical thinking abilities in software development scenarios.",
    },
    {
      id: "08",
      title: "Brain Storm Challenge",
      issuer: "Innovation Competition",
      date: "2023",
      icon: "bi-lightbulb-fill",
      color: "secondary",
      description:
        "Certificate of participation and achievement in brain storm challenge, showcasing creative thinking and innovative problem-solving approaches in technology solutions.",
    },
  ];

  return (
    <div>
      <Resume />
      <div className="pt-4 mt-5 container container-fluid col-xxl-8">
        {/* Current Experience */}
        <div className="row align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            <div className="d-flex justify-content-center align-items-center bg-dark rounded-4 p-3 shadow-sm">
              <img
                src="https://www.britwise.com/assets/imgs/logo-orange.png"
                className="img-fluid"
                alt="britwise"
                loading="lazy"
                data-aos="fade-left"
                style={{ maxHeight: "80px" }}
              />
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <h1 className="display-4 fw-bold" data-aos="fade-right">
              Full Stack Developer Intern
            </h1>
            <h1 className="fw-light">- Britwise Technologies Pvt Ltd</h1>
            <p>
              December 28, 2024 to June 28, 2025{" "}
              <span className="text-secondary">( 6 Months )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              As a Full Stack Developer Intern at Britwise Technologies Pvt Ltd, I am 
              gaining hands-on experience in developing comprehensive web applications 
              using modern technologies. My internship involves working on both frontend 
              and backend development, learning industry best practices, and contributing 
              to real-world projects. I am developing skills in full-stack development, 
              database management, API integration, and collaborative software development 
              while working alongside experienced developers.
            </p>
          </div>
        </div>

        {/* Britwise Internship Projects */}
        <div className="py-5 border-bottom">
          <h2 className="text-center mb-4 fw-bold">🚀 Projects During Britwise Internship</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div 
                className="card shadow-lg rounded-4 border-0 overflow-hidden"
                data-aos="zoom-in"
              >
                {/* Project Header */}
                <div className="card-header bg-gradient text-white text-center py-4" 
                     style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <img
                      src="https://diy-assets.classplus.co/_next/image?url=https://cdn-diy-public.classplus.co/prod/HasbasoftLogo5k_1721916411592.png&w=1920&q=75"
                      className="img-fluid bg-white rounded-3 p-2"
                      alt="hasbasoft"
                      loading="lazy"
                      style={{ maxHeight: "60px" }}
                    />
                  </div>
                  <h4 className="card-title mb-0 fw-bold">Hasbasoft Learning Management System</h4>
                  <p className="mb-0 mt-2 opacity-75">Educational Technology Platform</p>
                </div>

                {/* Project Content */}
                <div className="card-body p-4">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <h5 className="fw-bold mb-3">
                        <i className="bi bi-gear-fill text-primary me-2"></i>
                        Project Overview
                      </h5>
                      <p className="text-muted">
                        Developed a comprehensive Learning Management System (LMS) for Hasbasoft, 
                        an educational technology platform that enables online learning, course management, 
                        and student-teacher interactions. The platform serves thousands of users and 
                        provides a seamless educational experience.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h5 className="fw-bold mb-3">
                        <i className="bi bi-code-slash text-success me-2"></i>
                        Technologies Used
                      </h5>
                      <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">React.js</span>
                        <span className="badge bg-success bg-opacity-10 text-success px-3 py-2">Node.js</span>
                        <span className="badge bg-info bg-opacity-10 text-info px-3 py-2">Express.js</span>
                        <span className="badge bg-warning bg-opacity-10 text-warning px-3 py-2">MongoDB</span>
                        <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2">Socket.io</span>
                        <span className="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2">JWT</span>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="row g-4">
                    <div className="col-md-6">
                      <h5 className="fw-bold mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Key Features Implemented
                      </h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <i className="bi bi-arrow-right text-primary me-2"></i>
                          User Authentication & Authorization System
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-arrow-right text-primary me-2"></i>
                          Course Creation & Management Dashboard
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-arrow-right text-primary me-2"></i>
                          Real-time Video Conferencing Integration
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-arrow-right text-primary me-2"></i>
                          Assignment Submission & Grading System
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-arrow-right text-primary me-2"></i>
                          Progress Tracking & Analytics
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-arrow-right text-primary me-2"></i>
                          Payment Gateway Integration
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5 className="fw-bold mb-3">
                        <i className="bi bi-trophy-fill text-warning me-2"></i>
                        My Contributions
                      </h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <i className="bi bi-star-fill text-warning me-2"></i>
                          Developed responsive frontend components using React.js
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-star-fill text-warning me-2"></i>
                          Built RESTful APIs for course and user management
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-star-fill text-warning me-2"></i>
                          Implemented real-time chat functionality
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-star-fill text-warning me-2"></i>
                          Optimized database queries for better performance
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-star-fill text-warning me-2"></i>
                          Integrated third-party APIs for enhanced functionality
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-star-fill text-warning me-2"></i>
                          Conducted testing and bug fixes
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="text-center">
                    <h5 className="fw-bold mb-3">
                      <i className="bi bi-graph-up text-info me-2"></i>
                      Project Impact & Results
                    </h5>
                    <div className="row justify-content-center">
                      <div className="col-md-10">
                        <div className="d-flex justify-content-around text-center flex-wrap">
                          <div className="mb-3">
                            <h4 className="text-primary fw-bold">5000+</h4>
                            <p className="text-muted mb-0 small">Active Users</p>
                          </div>
                          <div className="mb-3">
                            <h4 className="text-success fw-bold">200+</h4>
                            <p className="text-muted mb-0 small">Courses Available</p>
                          </div>
                          <div className="mb-3">
                            <h4 className="text-info fw-bold">95%</h4>
                            <p className="text-muted mb-0 small">User Satisfaction</p>
                          </div>
                          <div className="mb-3">
                            <h4 className="text-warning fw-bold">24/7</h4>
                            <p className="text-muted mb-0 small">Platform Uptime</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted mt-3">
                      Successfully delivered a scalable and user-friendly learning management system 
                      that enhanced the educational experience for thousands of students and educators.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-2 mt-4">
                    <a
                      href="https://hasbasoft.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary flex-fill"
                    >
                      <i className="bi bi-eye me-2"></i>
                      View Live Platform
                    </a>
                    <a
                      href="https://diy-assets.classplus.co/_next/image?url=https://cdn-diy-public.classplus.co/prod/HasbasoftLogo5k_1721916411592.png&w=1920&q=75"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-secondary flex-fill"
                    >
                      <i className="bi bi-info-circle me-2"></i>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Experience */}
        <div className="row flex-row-reverse align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            <div className="d-flex justify-content-center align-items-center bg-white rounded-4 p-3 shadow-sm">
              <img
                src="https://diy-assets.classplus.co/_next/image?url=https://cdn-diy-public.classplus.co/prod/HasbasoftLogo5k_1721916411592.png&w=1920&q=75"
                className="img-fluid"
                alt="hasbasoft"
                loading="lazy"
                data-aos="fade-left"
                style={{ maxHeight: "80px" }}
              />
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <h1 className="display-4 fw-bold" data-aos="fade-left">
              MERN Stack Developer Trainee
            </h1>
            <h1 className="fw-light">- Hasbasoft Pvt Ltd</h1>
            <p>
              July 2023 to November 2024{" "}
              <span className="text-secondary">( Online )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              As a MERN Stack Developer Trainee at Hasbasoft Pvt Ltd, I
              contributed to web app development with MongoDB, Express.js,
              React.js, and Node.js. Designing interfaces, implementing
              features, and engaging in code reviews for continuous learning.
            </p>
          </div>
        </div>

        <div className="row align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            <div className="d-flex justify-content-center align-items-center bg-secondary rounded-4 p-3 shadow-sm">
              <h3 className="text-white mb-0 fw-bold">NullClass</h3>
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <h1 className="display-4 fw-bold" data-aos="fade-up">
              Project Intern
            </h1>
            <h1 className="fw-light">- NullClass</h1>
            <p>
              December 2022 to January 2023{" "}
              <span className="text-secondary">( Online )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              As a project intern, I created a responsive MERN
              Stack app (Stack Overflow Clone) and added features like a chat
              bot and community section. I gained valuable experience in
              React, Node.js, Express.js, and MongoDB, improving my skills in
              building scalable and user-centric web applications.
            </p>
          </div>
        </div>

        <div className="row flex-row-reverse align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            <div className="d-flex justify-content-center align-items-center bg-primary rounded-4 p-3 shadow-sm">
              <h3 className="text-white mb-0 fw-bold">Hasbasoft</h3>
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <h1 className="display-4 fw-bold" data-aos="fade-right">
              MERN Stack Software Trainee
            </h1>
            <h1 className="fw-light">- Hasbasoft Technology Pvt Ltd</h1>
            <p>
              August 2021 to October 2022{" "}
              <span className="text-secondary">( Online )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              As a Software Trainee at Hasbasoft Technology Pvt Ltd, I built
              several MERN Stack applications, including an Ecommerce platform.
              Through hands-on experience, I gained expertise in React,
              Node.js, Express.js, and MongoDB, developing dynamic and
              user-friendly web solutions in a professional software development
              environment.
            </p>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="py-5">
          <h1 className="mt-5 pb-2 text-center text-uppercase display-4 fw-bold">
            Certificates & Achievements
          </h1>
          <p className="text-center text-muted mb-5 lead">
            Professional certifications and achievements in web development and programming
          </p>
          
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
            {certificates.map((certificate, index) => (
              <div className="col" key={certificate.id}>
                <div 
                  className="card shadow h-100 rounded-4 border-0 overflow-hidden"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  {/* Certificate Header */}
                  <div className={`card-header bg-${certificate.color} text-white text-center py-4`}>
                    <i className={`${certificate.icon} mb-3`} style={{ fontSize: "3rem" }}></i>
                    <h5 className="card-title mb-0 fw-bold">{certificate.title}</h5>
                  </div>

                  {/* Certificate Body */}
                  <div className="card-body d-flex flex-column">
                    <div className="text-center mb-3">
                      <h6 className={`text-${certificate.color} fw-bold mb-1`}>{certificate.issuer}</h6>
                      <small className="text-muted">
                        <i className="bi bi-calendar3 me-1"></i>
                        {certificate.date}
                      </small>
                    </div>
                    
                    <p className="card-text text-muted flex-grow-1">{certificate.description}</p>
                    
                    {/* Certificate Badge */}
                    <div className="text-center mt-auto">
                      <span className={`badge bg-${certificate.color} bg-opacity-10 text-${certificate.color} px-3 py-2 rounded-pill`}>
                        <i className="bi bi-patch-check-fill me-1"></i>
                        Certified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certification Summary */}
          <div className="text-center py-5 bg-light rounded-4" data-aos="fade-up">
            <h3 className="fw-bold mb-3">Certification Summary</h3>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="d-flex justify-content-around text-center">
                  <div>
                    <h4 className="text-primary fw-bold">{certificates.length}</h4>
                    <p className="text-muted mb-0">Total Certificates</p>
                  </div>
                  <div>
                    <h4 className="text-success fw-bold">4</h4>
                    <p className="text-muted mb-0">Technical Skills</p>
                  </div>
                  <div>
                    <h4 className="text-info fw-bold">2</h4>
                    <p className="text-muted mb-0">Achievements</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="lead mt-4 col-lg-8 mx-auto">
              These certifications demonstrate my commitment to continuous learning and 
              expertise in modern web development technologies and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;