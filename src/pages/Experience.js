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
            <div className="d-flex justify-content-center align-items-center bg-white rounded-4 p-3 shadow-sm">
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

        {/* Previous Experience */}
        <div className="row flex-row-reverse align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            <div className="d-flex justify-content-center align-items-center bg-white rounded-4 p-3 shadow-sm">
              <img
                src="https://hasbasoft.com/assets/images/logo.png"
                className="img-fluid"
                alt="hasbasoft"
                loading="lazy"
                data-aos="fade-right"
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