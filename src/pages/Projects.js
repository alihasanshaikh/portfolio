import React from "react";
import ecommerce from "../assets/E-Commerce_Web_App.png";
import netflix from "../assets/Netflix_Clone.png";
import dice from "../assets/Dice_Game_with_JS.png";
import music from "../assets/Music_with_JS.png";
import Resume from "../components/Resume";

const Projects = () => {
  const topProjects = [
    {
      id: "01",
      title: "E-Commerce Web Application",
      thumbnail: ecommerce,
      description:
        "A comprehensive e-commerce platform built with the MERN stack. Features include user authentication, product catalog, shopping cart, order management, payment integration, and admin dashboard. Implemented with React.js for frontend, Node.js and Express.js for backend, and MongoDB for database management.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "JWT"],
      github: "https://github.com/alihasanshaikh",
      live: "#"
    },
    {
      id: "02",
      title: "Netflix Clone",
      thumbnail: netflix,
      description:
        "A responsive Netflix clone built with HTML, CSS, and JavaScript. Features include movie browsing, search functionality, responsive design, and modern UI/UX. Demonstrates proficiency in frontend development and creating pixel-perfect designs.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/alihasanshaikh",
      live: "#"
    },
    {
      id: "03",
      title: "Interactive Dice Game",
      thumbnail: dice,
      description:
        "An engaging dice game built with advanced JavaScript. Features include multiplayer functionality, score tracking, game state management, and interactive animations. Demonstrates expertise in JavaScript programming and game development logic.",
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
      github: "https://github.com/alihasanshaikh",
      live: "#"
    },
    {
      id: "04",
      title: "Music Player Application",
      thumbnail: music,
      description:
        "A feature-rich music player web application built with JavaScript. Includes playlist management, audio controls, progress tracking, shuffle and repeat modes, and responsive design. Showcases advanced JavaScript skills and audio API integration.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Audio API", "Local Storage"],
      github: "https://github.com/alihasanshaikh",
      live: "#"
    }
  ];

  const skills = [
    "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS3", 
    "Bootstrap", "Tailwind CSS", "Git", "RESTful APIs", "JWT Authentication"
  ];

  return (
    <div>
      <Resume />
      <div className="pt-5 mt-5 container container-fluid">
        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-4" data-aos="fade-up">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="lead col-lg-8 mx-auto" data-aos="fade-up" data-aos-delay="100">
            Explore my portfolio of web development projects showcasing expertise in 
            MERN stack development, responsive design, and modern web technologies.
          </p>
        </div>

        {/* Skills Overview */}
        <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-center mb-4">Technologies Used</h3>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="badge bg-primary fs-6 px-3 py-2 rounded-pill"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
          {topProjects.map((project, index) => (
            <div className="col" key={project.id}>
              <div 
                className="card shadow-lg h-100 rounded-4 border-0 overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Project Image */}
                <div className="position-relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    className="card-img-top"
                    alt={project.title}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0 transition-opacity" 
                       style={{ transition: "opacity 0.3s ease" }}
                       onMouseEnter={(e) => e.target.style.opacity = "1"}
                       onMouseLeave={(e) => e.target.style.opacity = "0"}>
                    <div className="text-center text-white">
                      <i className="bi bi-eye-fill fs-1 mb-2"></i>
                      <p className="mb-0">View Project</p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title text-primary fw-bold mb-3">{project.title}</h4>
                  <p className="card-text text-muted flex-grow-1">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-3">
                    <h6 className="fw-bold mb-2">Technologies:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="badge bg-light text-dark border"
                          style={{ fontSize: "0.75rem" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-2 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark flex-fill"
                    >
                      <i className="bi bi-github me-2"></i>
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary flex-fill"
                    >
                      <i className="bi bi-eye me-2"></i>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center py-5 bg-light rounded-4 mb-5" data-aos="fade-up">
          <h3 className="fw-bold mb-3">Interested in Working Together?</h3>
          <p className="lead mb-4 col-lg-8 mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects. 
            Let's discuss how we can bring your ideas to life!
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a href="#/contact" className="btn btn-primary btn-lg px-4">
              <i className="bi bi-envelope me-2"></i>
              Get In Touch
            </a>
            <a 
              href="https://github.com/alihasanshaikh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-lg px-4"
            >
              <i className="bi bi-github me-2"></i>
              View GitHub
            </a>
          </div>
        </div>

        {/* Development Process */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6" data-aos="fade-right">
            <h3 className="fw-bold mb-4">My Development Process</h3>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: "40px", height: "40px", minWidth: "40px" }}>
                  <span className="fw-bold">1</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Planning & Analysis</h5>
                  <p className="text-muted mb-0">Understanding requirements and creating detailed project roadmaps.</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: "40px", height: "40px", minWidth: "40px" }}>
                  <span className="fw-bold">2</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Design & Architecture</h5>
                  <p className="text-muted mb-0">Creating wireframes, UI designs, and system architecture.</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: "40px", height: "40px", minWidth: "40px" }}>
                  <span className="fw-bold">3</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Development & Testing</h5>
                  <p className="text-muted mb-0">Writing clean, maintainable code with comprehensive testing.</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: "40px", height: "40px", minWidth: "40px" }}>
                  <span className="fw-bold">4</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Deployment & Maintenance</h5>
                  <p className="text-muted mb-0">Deploying to production and providing ongoing support.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center" data-aos="fade-left">
            <div className="bg-primary bg-opacity-10 rounded-4 p-5">
              <i className="bi bi-code-slash text-primary" style={{ fontSize: "5rem" }}></i>
              <h4 className="mt-3 fw-bold">Clean Code Philosophy</h4>
              <p className="text-muted">
                I believe in writing code that is not only functional but also 
                maintainable, scalable, and follows industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;