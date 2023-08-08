// import React from "react";
// import alikarim from "../assets/alikarim.jfif";
// import nitin from "../assets/nitin.jpg";
// import Resume from "../components/Resume";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       id: "01",
//       name: "Diksha Dubey",
//       link: "https://www.linkedin.com/in/diksha-dubey-49a938209",
//       message:
//         "Mukesh is Very friendly in nature. He can work very nicely in a team. He helps to understand concept while working in a team. He helps others in team to grow with his own growth. He inspires other people to work better.",
//       date: "12 May 2023",
//     },
//     {
//       id: "02",
//       name: "Shweta Jadhav",
//       link: "https://www.linkedin.com/in/shweta-jadhav-b5784b241",
//       message:
//         "Mukesh is an exceptional web developer who possesses all the skills one would want in an excellent software developer.",
//       date: "12 May 2023",
//     },
//     {
//       id: "03",
//       name: "Rituraj Roj",
//       link: "https://www.linkedin.com/in/rituraj421",
//       message:
//         "Working with Mukesh was so friendly as well as professional at the same time. Looking forward to work with you again.",
//       date: "12 May 2023",
//     },
//     {
//       id: "04",
//       name: "Reshma Yadav",
//       link: "https://www.linkedin.com/in/reshu-yadav-556249252",
//       message:
//         "Having worked with Mukesh for three years, I have to say he is an excellent professional. He helped me understand the project management process and introduced me to useful tools. I am impressed with his work ethic and communication skills.",
//       date: "13 May 2023",
//     },
//     {
//       id: "05",
//       name: "Anjumaara Ansari",
//       link: "https://www.linkedin.com/in/anjumaara-ansari-8035a9246",
//       message:
//         "Mukesh is a very hardworking person and can easily tackle web problems. We have worked together on several projects, and he is a very skilled and dedicated professional. His expertise in the web development field has helped us a lot! I highly recommend him to anyone.",
//       date: "13 May 2023",
//     },
//     {
//       id: "06",
//       name: "Aman Sharma",
//       link: "https://www.linkedin.com/in/aman-sharma-1292001",
//       message: "Mukesh is best in Front-End design and clean UI.",
//       date: "13 May 2023",
//     },
//   ];

//   return (
//     <div className="pt-5 mt-5 container container-fluid">
//       <Resume />
//       <div className="card mb-4">
//         <div className="row g-0">
//           <div className="col-sm-1 col-md-4 m-auto text-center">
//             <img
//               src={alikarim}
//               className="img-fluid rounded-circle m-auto"
//               alt="alikarim"
//               data-aos="fade-left"
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h5 className="card-title fs-2" data-aos="fade-up">
//                 Ali Karim Sayed
//                 <a
//                   href="https://www.linkedin.com/in/alikarim007"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="bi bi-linkedin ms-2"></i>
//                 </a>
//               </h5>
//               <p className="card-text fs-5">
//                 Mukesh Sharma consistently demonstrated exceptional aptitude and
//                 enthusiasm for learning the ins and outs of the MERN Stack. He
//                 exhibited a strong grasp of the core concepts and principles,
//                 showcasing their ability to apply them effectively in real-world
//                 scenarios. He has exhibited a remarkable work ethic and
//                 commitment to excellence throughout the training period. He
//                 consistently showed a thirst for knowledge, actively seeking
//                 additional resources and going above and beyond to expand their
//                 understanding of the MERN Stack. His dedication and passion for
//                 learning were evident in their consistent progress and the
//                 quality of their work.
//               </p>
//               <p
//                 className="card-text text-body-secondary fs-5"
//                 data-aos="fade-down"
//               >
//                 - Posted on 27 May 2023
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card mb-4">
//         <div className="row g-0">
//           <div className="col-sm-1 col-md-4 m-auto text-center">
//             <img
//               src={nitin}
//               className="img-fluid rounded-circle m-auto"
//               alt="nitin"
//               data-aos="fade-left"
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h5 className="card-title fs-2" data-aos="fade-up">
//                 Nitin Prajapati
//                 <a
//                   href="https://www.linkedin.com/in/nitin-prajapati1"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="bi bi-linkedin ms-2"></i>
//                 </a>
//               </h5>
//               <p className="card-text fs-5">
//                 I highly recommend Mukesh as a MERN Stack Developer and would
//                 love to work together. Mukesh is amazing at his job! He knows
//                 his way around people, he is good with the clients, does
//                 whatever it takes to help colleagues and gets things done. He
//                 makes sure that everyone is on the same page and focused on the
//                 main goal.
//               </p>
//               <p
//                 className="card-text text-body-secondary fs-5"
//                 data-aos="fade-down"
//               >
//                 - Posted on 11 May 2023
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
//         {testimonials.map((testimonials) => (
//           <div className="col" key={testimonials.id}>
//             <div className="card h-100" data-aos="fade-up">
//               <div className="card-body">
//                 <h5 className="card-title fs-3">
//                   <i className="bi bi-person-circle"></i> {testimonials.name}
//                   <a
//                     href={testimonials.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i className="bi bi-linkedin ms-2"></i>
//                   </a>
//                 </h5>
//                 <p className="card-text fs-5">{testimonials.message}</p>
//                 <p className="card-text text-body-secondary fs-6">
//                   - Posted on {testimonials.date}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
