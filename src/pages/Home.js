import React from "react";
import mern from "../assets/mern.png";
import maukes from "../assets/new_maukes.png";
import Resume from "../components/Resume";

const Home = () => {
  return (
    <div>
      <Resume />
      <div className="pt-5 mt-5 text-center container container-fluid">
        <img
          className="d-block mx-auto mb-4"
          src={mern}
          alt="mern"
          width="150"
          height="150"
          data-aos="fade-down"
        />
        <h1 className="display-4 fw-bold text-uppercase text-secondary code">
          {"< "}
          <span className="mongo">M</span>
          <span className="express">E</span>
          <span className="react">R</span>
          <span className="node">N</span>
          <span> STACK DEVELOPER</span>
          {" />"}
        </h1>
        <div className="col-lg-8 mx-auto" data-aos="fade-up">
          <p className="lead">
            Solution driven 🚀 MERN Stack 💯 Developer 👨‍💻 with over a year of
            work experience building consumer focused online products and
            services. Designed and developed web apps 💻 across multiple APIs
            🔌, third party integrations 🤝, and databases 🗄.
          </p>
        </div>
        <div className="row align-items-md-center py-5 g-4">
          <div className="col-md-4 d-md-block" data-aos="fade-left">
            <img
              src={maukes}
              className="d-block mx-lg-auto img-fluid"
              alt="maukes"
              loading="lazy"
            />
          </div>
          <div className="col-md-8 col-sm-12">
            <h1 className="display-5 fw-bold lh-1 mb-3" data-aos="fade-right">
              Who is 🤔 <span className="text-danger">Mohammed Alihasan Shaikh</span> ? 👨‍🔧
            </h1>
            <p className="big--para">
              Hi, my name is Mohammed Alihasan Shaikh 👋 and I'm a MERN Stack Developer 💻
              with a passion for building efficient and scalable web
              applications 🚀. With expertise in MongoDB 🐋, Express 🚆, React
              ⚛️, and Node.js 🐙, I specialize in developing RESTful APIs 📃,
              integrating databases 🗃️, and implementing client-side
              functionality using React ⚛️. I have experience with Redux 🧳,
              Sass 💅, and Bootstrap 👖, and have worked with clients from
              startups 💡 to large corporations 🏢, adapting to diverse teams
              and project requirements. As a self-motivated problem solver 🤔, I
              strive to write maintainable and reusable code 📝. I'm always
              looking for opportunities to improve my skills and learn new
              technologies 💡. If you're looking for a MERN Stack Developer to
              bring your ideas to life, let's collaborate! 🤝
            </p>
          </div>
        </div>
      </div>
      <div className="container container-fluid mb-5">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <h1 className="text-center mb-4">Languages</h1>
            <div className="row">
              <div className="col">
                <div className="card mb-3" data-aos="zoom-in">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">English</h5>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            - Full Professional Proficiency
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card mb-3" data-aos="zoom-in">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Hindi</h5>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            - Native or Bilingual Proficiency
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-3" data-aos="zoom-in">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Marathi</h5>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            - Elementary Proficiency
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <h1 className="text-center mb-4">Interests</h1>
            <div className="d-flex flex-wrap justify-content-between">
              <div className="card mb-3 p-2" data-aos="zoom-in">
                <h5 className="card-title mb-0">👨🏾‍💻 Coding</h5>
              </div>
              <div className="card mb-3 p-2" data-aos="zoom-in">
                <h5 className="card-title mb-0">🎧 Music</h5>
              </div>
              <div className="card mb-3 p-2" data-aos="zoom-in">
                <h5 className="c mb-0">♟️ Chess</h5>
              </div>
              <div className="card mb-3 p-2" data-aos="zoom-in">
                <h5 className="card-title mb-0">🏏 Cricket</h5>
              </div>
              <div className="card mb-3 p-2" data-aos="zoom-in">
                <h5 className="card-title mb-0">⚽ Football</h5>
              </div>
              <div className="card mb-3 p-2" data-aos="zoom-in">
                <h5 className="c mb-0">🎥 Movies</h5>
              </div>
              <div className="card mb-3 p-2" data-aos="zoom-in">
                <h5 className="card-title mb-0">⭕ Carrom</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
