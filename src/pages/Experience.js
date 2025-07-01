import React from "react";
import nullclass from "../assets/nullclass.png";
import hasbasoft from "../assets/hasbasoft.png";
//import fiver from "../assets/fiver.png";
import netflix from "../assets/Netflix_Clone.png";
import dice from "../assets/Dice_Game_with_JS.png";
import music from "../assets/Music_with_JS.png";
import ecommerce from "../assets/E-Commerce_Web_App.png";

import Resume from "../components/Resume";

const Experience = () => {
  const certificates = [
    

    {
      id: "03",
      title: "E-Commerce Portal",
      image: ecommerce,
      alt: "certificate_of_ecommerce",
      description:
        "I have received a certification in MERN stack web development, specializing in creating and maintaining e-commerce portal web applications with expertise in MongoDB, Express.js, React.js, and Node.js.",
    },
    {
      id: "04",
      title: "Dice Game",
      image: dice,
      alt: "certificate_of_dice_game",
      description:
        "Certification obtained for advanced JavaScript-based dice game web application. Demonstrating proficiency in developing interactive and engaging gaming experiences using JavaScript and related technologies.",
    },
    {
      id: "05",
      title: "Music in JavaScript",
      image: music,
      alt: "certificate_of_music_in_javascript",
      description:
        "Certification of music player web application in advance JavaScript. Verified proficiency in developing interactive and seamless music players, utilizing advanced JavaScript techniques for enhanced user experience.",
    },
    {
      id: "06",
      title: "Netflix Like Frontend",
      image: netflix,
      alt: "certificate_of_netflix",
      description:
        "Certification received for creating a Netflix clone web application using HTML and CSS, demonstrating proficiency in frontend development and UI design.",
    },
  ];

  return (
    <div>
      <Resume />
      <div className="pt-4 mt-5 container container-fluid col-xxl-8">
        <div className="row align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            <img
              src={hasbasoft}
              className="d-block mx-lg-auto img-fluid rounded-4"
              alt="britwise"
              loading="lazy"
              data-aos="fade-left"
            />
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
        <div className="row flex-row-reverse align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            <img
              src={hasbasoft}
              className="d-block mx-lg-auto img-fluid rounded-4"
              alt="hasbasoft"
              loading="lazy"
              data-aos="fade-right"
            />
          </div>
          <div className="col-md-8 col-sm-12">
            <h1 className="display-4 fw-bold" data-aos="fade-left">
              Full Stack Developer
            </h1>
            <h1 className="fw-light">- Hasbasoft Pvt Ltd</h1>
            <p>
              December 2024 to June 2025{" "}
              <span className="text-secondary">( 6 Months )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              As a Full Stack Developer at Hasbasoft Pvt Ltd, I am responsible for 
              developing end-to-end web applications using the MERN stack. My role 
              involves designing and implementing both frontend user interfaces and 
              backend APIs, managing databases, and ensuring seamless integration 
              between all components. I collaborate with cross-functional teams to 
              deliver scalable and efficient web solutions while maintaining code 
              quality and following best practices.
            </p>
          </div>
        </div>
        <div className="row align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            <img
              src={hasbasoft}
              className="d-block mx-lg-auto img-fluid rounded-4"
              alt="hasbasoft"
              loading="lazy"
              data-aos="fade-left"
            />
          </div>
          <div className="col-md-8 col-sm-12">
            <h1 className="display-4 fw-bold" data-aos="fade-right">
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
        <div className="row flex-row-reverse align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            <img
              src={nullclass}
              className="d-block mx-lg-auto img-fluid"
              alt="nullclass"
              loading="lazy"
              data-aos="fade-right"
            />
          </div>
          {/* <div className="col-md-8 col-sm-12">
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
              As a 👩‍💻  intern , I created a 🚀 responsive MERN
              Stack app (Stack Overflow Clone) and added features like a 🤖 chat
              bot and community section. I gained valuable experience in 🛠
              React, Node.js, Express.js, and MongoDB, improving my skills in
              building 🏢 scalable and user-centric web applications.
            </p>
          </div> */}
        </div>
        <div className="row align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            <img
              src={hasbasoft}
              className="d-block mx-lg-auto img-fluid"
              alt="hasbasoft"
              loading="lazy"
              data-aos="fade-left"
            />
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
              As a Software Trainee at Hasbasoft Technology Pvt Ltd 🚀, I built
              several MERN Stack applications, including an Ecommerce platform
              🛒. Through hands-on experience, I gained expertise in React ⚛️,
              Node.js 🐿️, Express.js 🚆, and MongoDB 🐙, developing dynamic and
              user-friendly web solutions in a professional software development
              environment 💻.
            </p>
          </div>
        </div>
        <div className="row flex-row-reverse align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            {/* <img
              src={fiver}
              className="d-block mx-lg-auto img-fluid rounded-4"
              alt="fiver"
              loading="lazy"
              data-aos="fade-right"
            /> */}
          </div>
          {/* <div className="col-md-8 col-sm-12">
            <h1 className="display-4 fw-bold" data-aos="fade-left">
              Freelancer
            </h1>
            <h1 className="fw-light">- Fiver</h1>
            <p>
              May 2018 to September 2020{" "}
              <span className="text-secondary">( Online )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              As a Fiver freelancer 👩‍💻, I excelled in Excel VBA 📈, completing
              diverse tasks 📃 for multiple clients 👥. With expertise in
              automation 🤖 and data manipulation 📊, I delivered efficient and
              tailored solutions, consistently exceeding expectations 💯.
              Positive feedback 👏 attests to my strong Excel VBA skills 🖨 and
              professionalism 🎩.
            </p>
          </div> */}
        </div>
        <h1 className="mt-5 pb-2 text-center text-uppercase display-4 fw-bold">
          Certificates
        </h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
          {certificates.map((certificate) => (
            <div className="col" key={certificate.id}>
              <div className="card shadow h-100 rounded-3" data-aos="zoom-in">
                <div className="card-header">
                  <h4 className="text-center">{certificate.title}</h4>
                </div>
                <img src={certificate.image} alt={certificate.alt} />
                <title>{certificate.title}</title>
                <div className="card-body">
                  <p>{certificate.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;