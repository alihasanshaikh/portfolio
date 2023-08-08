import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <Link to="/skills" class="nav-link px-2 text-body-secondary">
              Skills
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/projects" class="nav-link px-2 text-body-secondary">
              Projects
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/education" class="nav-link px-2 text-body-secondary">
              Education
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/experience" class="nav-link px-2 text-body-secondary">
              Experience
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/testimonials" class="nav-link px-2 text-body-secondary">
              Testimonials
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="nav-link px-2 text-body-secondary">
              Contact
            </Link>
          </li>
        </ul>
        <p class="text-center text-body-secondary">Mohammed Alihasan © 2023</p>
      </footer>
    </div>
  );
};

export default Footer;
