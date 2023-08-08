import React from "react";
import skills from "../assets/skills.svg";
import mongodb from "../assets/mongodb.png";
import expressjs from "../assets/expressjs.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/nodejs.png";
import nextjs from "../assets/nextjs.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import sass from "../assets/sass.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import material from "../assets/material.png";
import chakra from "../assets/chakra.png";
import c from "../assets/c.png";
import cplus from "../assets/cplus.png";
import csharp from "../assets/csharp.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import aspnet from "../assets/aspnet.png";
import r from "../assets/r.png";
import laravel from "../assets/laravel.png";
import kotlin from "../assets/kotlin.png";
import excelvba from "../assets/excelvba.png";
import Resume from "../components/Resume";

const Skills = () => {
  const weblanguages = [
    { id: "01", image: html, title: "HTML", alt: "html" },
    { id: "02", image: css, title: "CSS", alt: "css" },
    { id: "03", image: javascript, title: "JAVASCRIPT", alt: "javascript" },
    { id: "04", image: sass, title: "SASS", alt: "sass" },
    { id: "05", image: bootstrap, title: "BOOTSTRAP CSS", alt: "bootstrap" },
    { id: "06", image: tailwind, title: "TAILWIND CSS", alt: "tailwind" },
    { id: "07", image: material, title: "MATERIAL UI", alt: "material" },
    { id: "08", image: chakra, title: "CHAKRA UI", alt: "chakra" },
    { id: "09", image: laravel, title: "LARAVEL", alt: "laravel" },
    { id: "10", image: nextjs, title: "NEXTJS", alt: "nextjs" },
    { id: "11", image: aspnet, title: "ASP.NET", alt: "asp.net" },
  ];

  const proglanguages = [
    { id: "01", image: c, title: "C", alt: "c" },
    { id: "02", image: cplus, title: "C++", alt: "cplus" },
    { id: "03", image: csharp, title: "C#", alt: "csharp" },
    { id: "04", image: python, title: "PYTHON", alt: "python" },
    { id: "05", image: java, title: "JAVA", alt: "java" },
    { id: "06", image: r, title: "R", alt: "r" },
    { id: "07", image: kotlin, title: "KOTLIN", alt: "kotlin" },
    { id: "08", image: excelvba, title: "EXCEL VBA", alt: "excelvba" },
  ];

  return (
    <div>
      <Resume />
      <div className="pt-5 mt-5 container container-fluid">
        <div className="row flex-lg-row-reverse align-items-center justify-content-center g-3">
          <div className="col-10 col-sm-8 col-lg-5" data-aos="fade-right">
            <img
              src={skills}
              className="d-block mx-lg-auto img-fluid"
              alt="skills"
              loading="lazy"
            />
          </div>
          <div className="col-lg-7">
            <h1 className="display-5 fw-bold lh-1 mb-4" data-aos="fade-up">
              I ✨Create✨ Responsive 💻and 🏢Modern 🌎Websites✨!
            </h1>
            <p className="lead big--para">
              These websites are built with ✨flexible layouts✨ and use 🛠modern
              design elements and technologies, such as HTML5, CSS3, and
              JavaScript. Responsive websites 📱automatically adjust their
              layout and content based on the device screen size, ensuring that
              the website looks and functions well on any device. This enhances
              the user experience and improves website accessibility. 💯
            </p>
          </div>
        </div>
        <div className="py-5">
          <h2 className="pb-2 border-bottom">Tech Stack</h2>
          <div className="row align-items-md-center py-5 g-4">
            <div className="col-md-4 d-md-block">
              <div className="row row-cols-2 g-4" data-aos="fade-left">
                <div className="col d-flex flex-column gap-2 align-items-center">
                  <div className="d-inline-flex align-items-center rounded-3">
                    <img src={mongodb} alt="mongodb" />
                  </div>
                  <h4 className="fw-semibold mb-0">MongoDB</h4>
                </div>
                <div className="col d-flex flex-column gap-2 align-items-center">
                  <div className="d-inline-flex align-items-center rounded-3">
                    <img src={expressjs} alt="expressjs" />
                  </div>
                  <h4 className="fw-semibold mb-0">ExpressJS</h4>
                </div>
                <div className="col d-flex flex-column gap-2 align-items-center">
                  <div className="d-inline-flex align-items-center rounded-3">
                    <img src={reactjs} alt="reactjs" />
                  </div>
                  <h4 className="fw-semibold mb-0">ReactJS</h4>
                </div>
                <div className="col d-flex flex-column gap-2 align-items-center">
                  <div className="d-inline-flex align-items-center rounded-3">
                    <img src={nodejs} alt="nodejs" />
                  </div>
                  <h4 className="fw-semibold mb-0">NodeJS</h4>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <h3 className="fw-bold" data-aos="fade-right">
                What is <span className="mongo">M</span>
                <span className="express">E</span>
                <span className="react">R</span>
                <span className="node">N</span> Stack ? 🤔
              </h3>
              <p className="text-muted big--para">
                MERN stack is a JavaScript-based web development stack that
                consists of four core technologies: MongoDB, Express.js,
                React.js, and Node.js.
              </p>
              <ul className="text-muted ms-0 ps-3 big--para">
                <li>
                  <span className="fw-bold mongo">MongoDB:</span> a NoSQL
                  document database that stores data in JSON-like documents. It
                  is highly scalable and flexible, allowing developers to store
                  and retrieve data quickly and efficiently.
                </li>
                <li>
                  <span className="fw-bold express">Express.js:</span> a web
                  application framework that runs on Node.js, providing a simple
                  and flexible way to create robust APIs and web applications.
                  It provides a set of middleware that simplifies the handling
                  of requests and responses, making it easier to build RESTful
                  APIs.
                </li>
                <li>
                  <span className="fw-bold react">React.js:</span> a front-end
                  library that allows developers to create dynamic user
                  interfaces using a component-based approach. React is known
                  for its performance and flexibility, and it is widely used to
                  build scalable and complex web applications.
                </li>
                <li>
                  <span className="fw-bold node">Node.js:</span> a JavaScript
                  runtime built on Chrome's V8 engine that allows developers to
                  run JavaScript code outside of a web browser. Node.js provides
                  a powerful platform for building scalable and high-performance
                  web applications, and it is widely used for server-side
                  programming.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h2 className="pb-2 border-bottom">Web Languages</h2>
        <div
          className="d-flex flex-wrap m-auto justify-content-between py-5"
          data-aos="fade-up"
        >
          {weblanguages.map((language) => (
            <div
              className="card shadow-sm mb-4 languages"
              style={{ width: "8rem" }}
              key={language.id}
            >
              <img
                src={language.image}
                className="card-img-top"
                alt="`{language.alt}`"
              />
              <div className="card-body">
                <p className="card-text text-center text-uppercase">
                  {language.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="pb-2 border-bottom">Programming Languages</h2>
        <div
          className="d-flex flex-wrap m-auto justify-content-between py-5"
          data-aos="fade-up"
        >
          {proglanguages.map((language) => (
            <div
              className="card shadow-sm mb-4 languages"
              style={{ width: "8rem" }}
              key={language.id}
            >
              <img
                src={language.image}
                className="card-img-top"
                alt="`{language.alt}`"
              />
              <div className="card-body">
                <p className="card-text text-center text-uppercase">
                  {language.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
