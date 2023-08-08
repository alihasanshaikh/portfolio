import React from "react";
import bscit from "../assets/bachelors.png";
import aptitude from "../assets/Aptitude_Test.png";
import brainstrom from "../assets/Brain_Storm.png";
import highschool from "../assets/highschool.jpg";
//import school from "../assets/school.png";
import Resume from "../components/Resume";

const Education = () => {
  const certificates = [
    {
      id: "01",
      title: "Certificate of Aptitude Test",
      image: aptitude,
      alt: "certificate_of_aptitude_test",
    },
    {
      id: "02",
      title: "Certificate of Brain Storm",
      image: brainstrom,
      alt: "certificate_of_brain_storm",
    },
  ];

  return (
    <div>
      <Resume />
      <div className="pt-4 mt-5 container container-fluid col-xxl-8">
        <div className="row flex-lg-row-reverse align-items-center g-3">
          <div className="col-10 col-sm-8 col-lg-5">
            <img
              src={bscit}
              className="d-block mx-lg-auto img-fluid"
              alt="bscit"
              loading="lazy"
              data-aos="fade-right"
            />
          </div>
          <div className="col-lg-7">
            <h1 className="display-4 fw-bold" data-aos="fade-up">
              Diploma in Computer Engineering
            </h1>
            <h1 className="fw-light">
              - A.i. Abdul Razzak Kalsekar
            </h1>
            <p>
             2020 to  2024{" "}
              <span className="text-secondary">( Panvel, Navi Mumbai )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              I ✨always✨ had a 🔥passion🔥 for web development and acquired
              skills in various web technologies 💻. I have created many
              websites 🌎, which impressed all my colleagues 👩‍💻 and professors
              👨‍🏫. I became a sought-after web developer 🚀, proving that hard
              work and dedication can lead to success 🏆.
            </p>
          </div>
        </div>
        <div
          className="row row-cols-1 row-cols-md-2 g-3 pb-5 border-bottom"
          data-aos="fade-down"
        >
          {certificates.map((certificate) => (
            <div className="col" key={certificate.id}>
              <div className="card shadow h-100 rounded-3">
                <div className="card-header">
                  <h4 className="text-center">{certificate.title}</h4>
                </div>
                <img src={certificate.image} alt={certificate.alt} />
                <title>{certificate.title}</title>
              </div>
            </div>
          ))}
        </div>
        <div className="row align-items-center g-3 border-bottom py-5">
          <div className="col-10 col-sm-8 col-lg-5">
            <img
              src={highschool}
              className="d-block mx-lg-auto img-fluid"
              alt="hsc"
              loading="lazy"
              data-aos="fade-left"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold" data-aos="fade-right">
              SSC
            </h1>
            <h1 className="fw-light">- Shankar Rao Chavan</h1>
            <p>
              2020 to  2021{" "}
              <span className="text-secondary">( Kamote, Navi Mumbai )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              I was always 🤯 fascinated by the mysteries of the universe.
              Despite not being the smartest 🤓 student in my class, I 📚 spends
              every free moment delving into books and videos on cosmology and
              astrophysics 🌌🔭.
            </p>
          </div>
        </div>
        <div className="row flex-lg-row-reverse align-items-center g-3">
          <div className="col-10 col-sm-8 col-lg-5">
            {/* <img
              src={school}
              className="d-block mx-lg-auto img-fluid"
              alt="school"
              loading="lazy"
              data-aos="fade-right"
            />
          </div>
          <div className="col-lg-7">
            <h1 className="display-4 fw-bold" data-aos="fade-left">
              Secondary School Certification
            </h1>
            <h1 className="fw-light">- Tilak International School</h1>
            <p>
              June 2015 to March 2016{" "}
              <span className="text-secondary">( Ghansoli, Navi Mumbai )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              I always had a keen interest in computers and technology 💻🖱️, I
              used to participate in a school computer science competition 🏆
              despite my lack of confidence 🥺. I studied hard 📚, boosting my
              confidence and setting me on a path towards a successful career in
              technology 🚀.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
