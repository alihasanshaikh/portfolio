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
      title: "Social Media Dashboard",
      icon: "bi-people-fill",
      color: "primary",
      description:
        "A comprehensive social media management dashboard built with React.js. Features user authentication, post creation, real-time notifications, friend connections, and analytics. Demonstrates advanced React patterns and state management.",
      technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
      github: "https://github.com/alihasanshaikh/social-media-dashboard",
      live: "#",
      category: "Full Stack",
      status: "Completed",
      year: "2024"
    },
    {
      id: "04",
      title: "Task Management System",
      icon: "bi-kanban-fill",
      color: "info",
      description:
        "A powerful project management tool with Kanban boards, team collaboration features, deadline tracking, and progress analytics. Built with modern React patterns and real-time updates using WebSocket technology.",
      technologies: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Socket.io", "Material-UI"],
      github: "https://github.com/alihasanshaikh/task-management-system",
      live: "#",
      category: "Full Stack",
      status: "Completed",
      year: "2024"
    }
  ];

  const webDevelopmentProjects = [
    {
      id: "05",
      title: "Interactive Dice Game",
      icon: "bi-dice-6-fill",
      color: "warning",
      description: "An engaging multiplayer dice game demonstrating advanced JavaScript programming. Features game state management, score tracking, player turns, winning conditions, and smooth animations.",
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation", "Game Logic"],
      github: "https://github.com/alihasanshaikh/dice-game",
      category: "JavaScript",
      status: "Completed",
      year: "2023"
    },
    {
      id: "06",
      title: "Music Player Application",
      icon: "bi-music-note-beamed",
      color: "info",
      description: "A feature-rich music player web application with playlist management, audio controls, progress tracking, shuffle/repeat modes, and local storage integration.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Web Audio API", "Local Storage"],
      github: "https://github.com/alihasanshaikh/music-player",
      category: "JavaScript",
      status: "Completed",
      year: "2023"
    },
    {
      id: "07",
      title: "Weather Forecast App",
      icon: "bi-cloud-sun-fill",
      color: "info",
      description: "A responsive weather application that fetches real-time weather data using OpenWeather API. Features location-based weather, 5-day forecast, and beautiful UI with weather animations.",
      technologies: ["JavaScript", "Weather API", "CSS3", "Responsive Design", "Geolocation API"],
      github: "https://github.com/alihasanshaikh/weather-app",
      category: "API Integration",
      status: "Completed",
      year: "2023"
    },
    {
      id: "08",
      title: "Calculator Pro",
      icon: "bi-calculator-fill",
      color: "dark",
      description: "A fully functional scientific calculator with basic arithmetic operations, memory functions, keyboard support, and history tracking. Features modern design and smooth animations.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Event Handling", "Local Storage"],
      github: "https://github.com/alihasanshaikh/calculator",
      category: "JavaScript",
      status: "Completed",
      year: "2023"
    },
    {
      id: "09",
      title: "Portfolio Website",
      icon: "bi-person-badge-fill",
      color: "primary",
      description: "Personal portfolio website built with React.js showcasing my skills, projects, and experience. Features responsive design, smooth animations, and contact form integration.",
      technologies: ["React.js", "Bootstrap", "EmailJS", "AOS", "React Router"],
      github: "https://github.com/alihasanshaikh/portfolio",
      category: "React",
      status: "Live",
      year: "2024"
    },
    {
      id: "10",
      title: "Todo List Manager",
      icon: "bi-check2-square",
      color: "success",
      description: "A productivity app for managing daily tasks with features like task creation, editing, deletion, priority levels, categories, and progress tracking. Built with React and local storage.",
      technologies: ["React.js", "CSS3", "Local Storage", "React Hooks", "Context API"],
      github: "https://github.com/alihasanshaikh/todo-manager",
      category: "React",
      status: "Completed",
      year: "2023"
    }
  ];

  const backendProjects = [
    {
      id: "11",
      title: "RESTful API Server",
      icon: "bi-server",
      color: "secondary",
      description: "A robust RESTful API server built with Node.js and Express.js. Features user authentication, CRUD operations, data validation, error handling, and comprehensive API documentation.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Swagger", "Bcrypt"],
      github: "https://github.com/alihasanshaikh/restful-api-server",
      category: "Backend",
      status: "Completed",
      year: "2024"
    },
    {
      id: "12",
      title: "Chat Application Backend",
      icon: "bi-chat-dots-fill",
      color: "primary",
      description: "Real-time chat application backend with WebSocket support. Features user authentication, private messaging, group chats, message history, and online status tracking.",
      technologies: ["Node.js", "Socket.io", "Express.js", "MongoDB", "JWT", "Redis"],
      github: "https://github.com/alihasanshaikh/chat-app-backend",
      category: "Backend",
      status: "Completed",
      year: "2024"
    },
    {
      id: "13",
      title: "Blog Management API",
      icon: "bi-journal-text",
      color: "info",
      description: "A comprehensive blog management system API with user roles, content management, commenting system, search functionality, and admin dashboard integration.",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "Sequelize", "JWT", "Multer"],
      github: "https://github.com/alihasanshaikh/blog-api",
      category: "Backend",
      status: "Completed",
      year: "2023"
    }
  ];

  const mobileAndOtherProjects = [
    {
      id: "14",
      title: "React Native Food App",
      icon: "bi-phone-fill",
      color: "warning",
      description: "A cross-platform mobile food delivery app built with React Native. Features restaurant browsing, menu management, cart functionality, order tracking, and payment integration.",
      technologies: ["React Native", "Expo", "Redux", "Firebase", "Stripe API", "Maps API"],
      github: "https://github.com/alihasanshaikh/food-delivery-app",
      category: "Mobile",
      status: "In Progress",
      year: "2024"
    },
    {
      id: "15",
      title: "Expense Tracker",
      icon: "bi-wallet2",
      color: "success",
      description: "A personal finance management app for tracking expenses, income, and budgets. Features data visualization, category management, and financial insights with charts and reports.",
      technologies: ["React.js", "Chart.js", "Local Storage", "CSS3", "Bootstrap"],
      github: "https://github.com/alihasanshaikh/expense-tracker",
      category: "React",
      status: "Completed",
      year: "2023"
    },
    {
      id: "16",
      title: "URL Shortener Service",
      icon: "bi-link-45deg",
      color: "primary",
      description: "A URL shortening service similar to bit.ly with analytics tracking. Features custom short URLs, click analytics, QR code generation, and user dashboard.",
      technologies: ["Node.js", "Express.js", "MongoDB", "QR Code API", "Chart.js"],
      github: "https://github.com/alihasanshaikh/url-shortener",
      category: "Full Stack",
      status: "Completed",
      year: "2024"
    },
    {
      id: "17",
      title: "Quiz Application",
      icon: "bi-question-circle-fill",
      color: "info",
      description: "An interactive quiz application with multiple categories, timer functionality, score tracking, and leaderboard. Features admin panel for quiz management and user progress tracking.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      github: "https://github.com/alihasanshaikh/quiz-app",
      category: "Full Stack",
      status: "Completed",
      year: "2023"
    },
    {
      id: "18",
      title: "Image Gallery App",
      icon: "bi-images",
      color: "secondary",
      description: "A responsive image gallery application with upload functionality, search filters, categories, and lightbox view. Features image optimization and cloud storage integration.",
      technologies: ["React.js", "Cloudinary", "Node.js", "Express.js", "Multer"],
      github: "https://github.com/alihasanshaikh/image-gallery",
      category: "Full Stack",
      status: "Completed",
      year: "2023"
    },
    {
      id: "19",
      title: "Recipe Finder",
      icon: "bi-cup-hot-fill",
      color: "warning",
      description: "A recipe discovery app that helps users find recipes based on available ingredients. Features recipe search, favorites, shopping list generation, and nutritional information.",
      technologies: ["React.js", "Recipe API", "CSS3", "Local Storage", "Bootstrap"],
      github: "https://github.com/alihasanshaikh/recipe-finder",
      category: "React",
      status: "Completed",
      year: "2023"
    },
    {
      id: "20",
      title: "Cryptocurrency Tracker",
      icon: "bi-currency-bitcoin",
      color: "warning",
      description: "A real-time cryptocurrency price tracking application with portfolio management, price alerts, market analysis, and historical data visualization.",
      technologies: ["React.js", "CoinGecko API", "Chart.js", "WebSocket", "Bootstrap"],
      github: "https://github.com/alihasanshaikh/crypto-tracker",
      category: "React",
      status: "Completed",
      year: "2024"
    }
  ];

  const allProjects = [...featuredProjects, ...webDevelopmentProjects, ...backendProjects, ...mobileAndOtherProjects];

  const skills = [
    "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "TypeScript", "HTML5", "CSS3", 
    "Bootstrap", "Tailwind CSS", "Git", "RESTful APIs", "JWT Authentication", "Socket.io", 
    "Redux", "PostgreSQL", "Firebase", "React Native", "Stripe API", "Chart.js"
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend", "JavaScript", "React", "API Integration", "Mobile"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredFeatured = activeCategory === "All" 
    ? featuredProjects
    : featuredProjects.filter(project => project.category === activeCategory);

  const filteredWebDev = activeCategory === "All" 
    ? webDevelopmentProjects
    : webDevelopmentProjects.filter(project => project.category === activeCategory);

  const filteredBackend = activeCategory === "All" 
    ? backendProjects
    : backendProjects.filter(project => project.category === activeCategory);

  const filteredOther = activeCategory === "All" 
    ? mobileAndOtherProjects
    : mobileAndOtherProjects.filter(project => project.category === activeCategory);

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
            Explore my comprehensive portfolio of {allProjects.length}+ web development projects showcasing expertise in 
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
            <h2 className="text-center mb-4 fw-bold">🌟 Featured Projects</h2>
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

        {/* Web Development Projects */}
        {filteredWebDev.length > 0 && (
          <div className="mb-5">
            <h2 className="text-center mb-4 fw-bold">🌐 Web Development Projects</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {filteredWebDev.map((project, index) => (
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

        {/* Backend Projects */}
        {filteredBackend.length > 0 && (
          <div className="mb-5">
            <h2 className="text-center mb-4 fw-bold">⚙️ Backend & API Projects</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {filteredBackend.map((project, index) => (
                <div className="col" key={project.id}>
                  <div 
                    className="card shadow h-100 rounded-4 border-0 overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
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

                      <div className="text-center mb-3">
                        <span className={`badge bg-${project.color} bg-opacity-10 text-${project.color} px-3 py-2 rounded-pill`}>
                          <i className="bi bi-check-circle-fill me-1"></i>
                          {project.status}
                        </span>
                      </div>

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

        {/* Mobile & Other Projects */}
        {filteredOther.length > 0 && (
          <div className="mb-5">
            <h2 className="text-center mb-4 fw-bold">📱 Mobile & Specialized Projects</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {filteredOther.map((project, index) => (
                <div className="col" key={project.id}>
                  <div 
                    className="card shadow h-100 rounded-4 border-0 overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
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

                      <div className="text-center mb-3">
                        <span className={`badge bg-${project.color} bg-opacity-10 text-${project.color} px-3 py-2 rounded-pill`}>
                          <i className="bi bi-check-circle-fill me-1"></i>
                          {project.status}
                        </span>
                      </div>

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
          <h3 className="fw-bold mb-3">Project Portfolio Statistics</h3>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="d-flex justify-content-around text-center flex-wrap">
                <div className="mb-3">
                  <h4 className="text-primary fw-bold">{allProjects.length}</h4>
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
                <div className="mb-3">
                  <h4 className="text-danger fw-bold">3</h4>
                  <p className="text-muted mb-0">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
          <p className="lead mt-4 col-lg-8 mx-auto">
            Each project represents a learning journey and demonstrates my growth as a developer. 
            From simple JavaScript applications to complex full-stack solutions with modern architectures.
          </p>
        </div>

        {/* GitHub Activity */}
        <div className="text-center py-5 bg-primary bg-opacity-10 rounded-4 mb-5" data-aos="fade-up">
          <h3 className="fw-bold mb-3">GitHub Activity & Contributions</h3>
          <p className="lead mb-4 col-lg-8 mx-auto">
            Check out my GitHub profile to see all my projects, contributions, and coding activity. 
            I'm actively contributing to open source and building innovative solutions.
          </p>
          <div className="row justify-content-center mb-4">
            <div className="col-md-10">
              <div className="d-flex justify-content-around text-center flex-wrap">
                <div className="mb-3">
                  <h4 className="text-primary fw-bold">25+</h4>
                  <p className="text-muted mb-0">Public Repositories</p>
                </div>
                <div className="mb-3">
                  <h4 className="text-primary fw-bold">1000+</h4>
                  <p className="text-muted mb-0">Total Commits</p>
                </div>
                <div className="mb-3">
                  <h4 className="text-primary fw-bold">12+</h4>
                  <p className="text-muted mb-0">Languages Used</p>
                </div>
                <div className="mb-3">
                  <h4 className="text-primary fw-bold">50+</h4>
                  <p className="text-muted mb-0">Stars Earned</p>
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
                  <p className="text-muted mb-0">Understanding requirements, researching best practices, and creating detailed project roadmaps with user stories and technical specifications.</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: "40px", height: "40px", minWidth: "40px" }}>
                  <span className="fw-bold">2</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Design & Architecture</h5>
                  <p className="text-muted mb-0">Creating wireframes, designing user interfaces, planning system architecture, and selecting appropriate technology stacks for optimal performance.</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: "40px", height: "40px", minWidth: "40px" }}>
                  <span className="fw-bold">3</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Development & Testing</h5>
                  <p className="text-muted mb-0">Writing clean, maintainable code with comprehensive testing, code reviews, and version control using Git and modern development workflows.</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: "40px", height: "40px", minWidth: "40px" }}>
                  <span className="fw-bold">4</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Deployment & Optimization</h5>
                  <p className="text-muted mb-0">Deploying to production environments, performance optimization, monitoring, security implementation, and ongoing maintenance with CI/CD pipelines.</p>
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
                is an opportunity to learn, improve, and contribute to the developer community.
              </p>
              <div className="mt-4">
                <div className="d-flex justify-content-around text-center">
                  <div>
                    <h5 className="text-primary fw-bold">Clean</h5>
                    <small className="text-muted">Readable Code</small>
                  </div>
                  <div>
                    <h5 className="text-success fw-bold">Tested</h5>
                    <small className="text-muted">Quality Assured</small>
                  </div>
                  <div>
                    <h5 className="text-info fw-bold">Scalable</h5>
                    <small className="text-muted">Future Ready</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-5 bg-gradient rounded-4 mb-5" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }} data-aos="fade-up">
          <div className="text-white">
            <h3 className="fw-bold mb-3">Let's Build Something Amazing Together!</h3>
            <p className="lead mb-4 col-lg-8 mx-auto">
              I'm always excited to work on new projects and collaborate with fellow developers. 
              Whether you have a project idea or want to contribute to open source, let's connect!
            </p>
            <div className="mt-4">
              <a href="#/contact" className="btn btn-light btn-lg px-4 me-3">
                <i className="bi bi-envelope me-2"></i>
                Start a Project
              </a>
              <a 
                href="https://github.com/alihasanshaikh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg px-4"
              >
                <i className="bi bi-github me-2"></i>
                Collaborate on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;