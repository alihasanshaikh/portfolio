import React from "react";
import Resume from "../components/Resume";

const Projects = () => {
  const featuredProjects = [
    {
      id: "01",
      title: "E-Commerce Web Application",
      icon: "bi-cart-fill",
      color: "success",
      description:
        "A full-featured e-commerce platform built with the MERN stack. Includes user authentication, product management, shopping cart functionality, order processing, payment integration, and admin dashboard. Features responsive design and modern UI/UX.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bootstrap", "Stripe API"],
      github: "https://github.com/alihasanshaikh/ecommerce-mern",
      live: "#",
      category: "Full Stack",
      status: "Completed",
      year: "2024"
    },
    {
      id: "02",
      title: "Netflix Clone",
      icon: "bi-play-circle-fill",
      color: "danger",
      description:
        "A pixel-perfect Netflix clone showcasing advanced frontend development skills. Features responsive design, movie browsing interface, search functionality, and modern CSS animations. Built with vanilla HTML, CSS, and JavaScript.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "CSS Grid", "Flexbox"],
      github: "https://github.com/alihasanshaikh/netflix-clone",
      live: "#",
      category: "Frontend",
      status: "Completed",
      year: "2024"
    },
    {
      id: "03",
      title: "Interactive Dice Game",
      icon: "bi-dice-6-fill",
      color: "warning",
      description:
        "An engaging multiplayer dice game demonstrating advanced JavaScript programming. Features game state management, score tracking, player turns, winning conditions, and smooth animations. Perfect example of DOM manipulation and game logic.",
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation", "Game Logic"],
      github: "https://github.com/alihasanshaikh/dice-game",
      live: "#",
      category: "JavaScript",
      status: "Completed",
      year: "2023"
    },
    {
      id: "04",
      title: "Music Player Application",
      icon: "bi-music-note-beamed",
      color: "info",
      description:
        "A feature-rich music player web application with playlist management, audio controls, progress tracking, shuffle/repeat modes, and local storage integration. Demonstrates expertise in Web Audio API and modern JavaScript.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Web Audio API", "Local Storage", "CSS Animations"],
      github: "https://github.com/alihasanshaikh/music-player",
      live: "#",
      category: "JavaScript",
      status: "Completed",
      year: "2023"
    }
  ];

  const additionalProjects = [
    {
      id: "05",
      title: "Portfolio Website",
      icon: "bi-person-badge-fill",
      color: "primary",
      description: "Personal portfolio website built with React.js showcasing my skills, projects, and experience. Features responsive design, smooth animations, and contact form integration.",
      technologies: ["React.js", "Bootstrap", "EmailJS", "AOS"],
      github: "https://github.com/alihasanshaikh/portfolio",
      category: "React",
      status: "Live",
      year: "2024"
    },
    {
      id: "06",
      title: "Task Management App",
      icon: "bi-check2-square",
      color: "secondary",
      description: "A productivity app for managing daily tasks with features like task creation, editing, deletion, and status tracking. Built with React and local storage.",
      technologies: ["React.js", "CSS3", "Local Storage", "React Hooks"],
      github: "https://github.com/alihasanshaikh/task-manager",
      category: "React",
      status: "Completed",
      year: "2023"
    },
    {
      id: "07",
      title: "Weather App",
      icon: "bi-cloud-sun-fill",
      color: "info",
      description: "A responsive weather application that fetches real-time weather data using OpenWeather API. Features location-based weather, 5-day forecast, and beautiful UI.",
      technologies: ["JavaScript", "Weather API", "CSS3", "Responsive Design"],
      github: "https://github.com/alihasanshaikh/weather-app",
      category: "API Integration",
      status: "Completed",
      year: "2023"
    },
    {
      id: "08",
      title: "Calculator App",
      icon: "bi-calculator-fill",
      color: "dark",
      description: "A fully functional calculator with basic arithmetic operations, memory functions, and keyboard support. Demonstrates clean code practices and user interface design.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Event Handling"],
      github: "https://github.com/alihasanshaikh/calculator",
      category: "JavaScript",
      status: "Completed",
      year: "2023"
    }
  ];

  const skills = [
    "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS3", 
    "Bootstrap", "Tailwind CSS", "Git", "RESTful APIs", "JWT Authentication", "Stripe API"
  ];

  const categories = ["All", "Full Stack", "Frontend", "JavaScript", "React", "API Integration"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredFeatured = activeCategory === "All" 
    ? featuredProjects
    : featuredProjects.filter(project => project.category === activeCategory);

  const filteredAdditional = activeCategory === "All" 
    ? additionalProjects
    : additionalProjects.filter(project => project.category === activeCategory);

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
          <div className="mt-4" data-aos="fade-up" data-aos-delay="200">
            <a 
              href="https://github.com/alihasanshaikh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-lg"
            >
              <i className="bi bi-github me-2"></i>
              View All on GitHub
            </a>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-center mb-4">Technologies & Skills</h3>
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

        {/* Project Categories Filter */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h3 className="mb-4">Project Categories</h3>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-outline-primary'} rounded-pill px-4`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        {filteredFeatured.length > 0 && (
          <div className="mb-5">
            <h2 className="text-center mb-4 fw-bold">Featured Projects</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {filteredFeatured.map((project, index) => (
                <div className="col" key={project.id}>
                  <div 
                    className="card shadow-lg h-100 rounded-4 border-0 overflow-hidden"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    {/* Project Header */}
                    <div className={`card-header bg-${project.color} text-white text-center py-4`}>
                      <i className={`${project.icon} mb-3`} style={{ fontSize: "3rem" }}></i>
                      <h4 className="card-title mb-0 fw-bold">{project.title}</h4>
                      <div className="mt-2">
                        <span className="badge bg-white bg-opacity-20 me-2">
                          <i className="bi bi-calendar3 me-1"></i>
                          {project.year}
                        </span>
                        <span className="badge bg-white bg-opacity-20">
                          <i className="bi bi-check-circle me-1"></i>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="card-body d-flex flex-column">
                      <div className="text-center mb-3">
                        <span className={`badge bg-${project.color} bg-opacity-10 text-${project.color} px-3 py-2 rounded-pill`}>
                          <i className="bi bi-tag-fill me-1"></i>
                          {project.category}
                        </span>
                      </div>
                      
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
                        {project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary flex-fill"
                          >
                            <i className="bi bi-eye me-2"></i>
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Projects */}
        {filteredAdditional.length > 0 && (
          <div className="mb-5">
            <h2 className="text-center mb-4 fw-bold">More Projects</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {filteredAdditional.map((project, index) => (
                <div className="col" key={project.id}>
                  <div 
                    className="card shadow h-100 rounded-4 border-0 overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    {/* Project Header */}
                    <div className={`card-header bg-${project.color} text-white text-center py-3`}>
                      <i className={`${project.icon} mb-2`} style={{ fontSize: "2.5rem" }}></i>
                      <h5 className="card-title mb-0 fw-bold">{project.title}</h5>
                    </div>

                    <div className="card-body d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className={`badge bg-${project.color} bg-opacity-10 text-${project.color}`}>
                          {project.category}
                        </span>
                        <small className="text-muted">
                          <i className="bi bi-calendar3 me-1"></i>
                          {project.year}
                        </small>
                      </div>
                      
                      <p className="card-text text-muted flex-grow-1">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="mb-3">
                        <div className="d-flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="badge bg-primary bg-opacity-10 text-primary border-0"
                              style={{ fontSize: "0.7rem" }}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="badge bg-secondary bg-opacity-10 text-secondary border-0" style={{ fontSize: "0.7rem" }}>
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="text-center mb-3">
                        <span className={`badge bg-${project.color} bg-opacity-10 text-${project.color} px-3 py-2 rounded-pill`}>
                          <i className="bi bi-check-circle-fill me-1"></i>
                          {project.status}
                        </span>
                      </div>

                      {/* Action Button */}
                      <div className="mt-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary w-100"
                        >
                          <i className="bi bi-github me-2"></i>
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Statistics */}
        <div className="text-center py-5 bg-light rounded-4 mb-5" data-aos="fade-up">
          <h3 className="fw-bold mb-3">Project Statistics</h3>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="d-flex justify-content-around text-center flex-wrap">
                <div className="mb-3">
                  <h4 className="text-primary fw-bold">{featuredProjects.length + additionalProjects.length}</h4>
                  <p className="text-muted mb-0">Total Projects</p>
                </div>
                <div className="mb-3">
                  <h4 className="text-success fw-bold">{featuredProjects.length}</h4>
                  <p className="text-muted mb-0">Featured Projects</p>
                </div>
                <div className="mb-3">
                  <h4 className="text-info fw-bold">{skills.length}</h4>
                  <p className="text-muted mb-0">Technologies Used</p>
                </div>
                <div className="mb-3">
                  <h4 className="text-warning fw-bold">{categories.length - 1}</h4>
                  <p className="text-muted mb-0">Project Categories</p>
                </div>
              </div>
            </div>
          </div>
          <p className="lead mt-4 col-lg-8 mx-auto">
            Each project represents a learning journey and demonstrates my growth as a developer. 
            From simple JavaScript applications to complex full-stack solutions.
          </p>
        </div>

        {/* GitHub Activity */}
        <div className="text-center py-5 bg-primary bg-opacity-10 rounded-4 mb-5" data-aos="fade-up">
          <h3 className="fw-bold mb-3">GitHub Activity</h3>
          <p className="lead mb-4 col-lg-8 mx-auto">
            Check out my GitHub profile to see all my projects, contributions, and coding activity.
          </p>
          <div className="row justify-content-center mb-4">
            <div className="col-md-8">
              <div className="d-flex justify-content-around text-center">
                <div>
                  <h4 className="text-primary fw-bold">15+</h4>
                  <p className="text-muted mb-0">Public Repositories</p>
                </div>
                <div>
                  <h4 className="text-primary fw-bold">500+</h4>
                  <p className="text-muted mb-0">Commits</p>
                </div>
                <div>
                  <h4 className="text-primary fw-bold">8+</h4>
                  <p className="text-muted mb-0">Languages Used</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <a 
              href="https://github.com/alihasanshaikh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg px-4 me-3"
            >
              <i className="bi bi-github me-2"></i>
              Visit GitHub Profile
            </a>
            <a href="#/contact" className="btn btn-outline-primary btn-lg px-4">
              <i className="bi bi-envelope me-2"></i>
              Get In Touch
            </a>
          </div>
        </div>

        {/* Development Process */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6" data-aos="fade-right">
            <h3 className="fw-bold mb-4">My Development Approach</h3>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: "40px", height: "40px", minWidth: "40px" }}>
                  <span className="fw-bold">1</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Research & Planning</h5>
                  <p className="text-muted mb-0">Understanding requirements, researching best practices, and creating detailed project roadmaps.</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: "40px", height: "40px", minWidth: "40px" }}>
                  <span className="fw-bold">2</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Design & Architecture</h5>
                  <p className="text-muted mb-0">Creating wireframes, designing user interfaces, and planning system architecture.</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: "40px", height: "40px", minWidth: "40px" }}>
                  <span className="fw-bold">3</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Development & Testing</h5>
                  <p className="text-muted mb-0">Writing clean, maintainable code with comprehensive testing and version control.</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: "40px", height: "40px", minWidth: "40px" }}>
                  <span className="fw-bold">4</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Deployment & Optimization</h5>
                  <p className="text-muted mb-0">Deploying to production, performance optimization, and ongoing maintenance.</p>
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
                maintainable, scalable, and follows industry best practices. Every project 
                is an opportunity to learn and improve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;