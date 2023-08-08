// import React from "react";
// import ecommerce from "../assets/E-Commerce Web App - Thumbnail.jpg";
// import primevideo from "../assets/Prime Video Clone - Mark 2 -  Tumbnail.jpg";
// import netflix from "../assets/Netflix Clone - Mark 2 - Thumbnail.jpg";
//import memories from "../assets/Memories - Thumbnail.jpg";
//import stack from "../assets/Stack-Overflow-Clone-Thumbnail.jpg";
//import youtube from "../assets/YouTube-Clone-Thumbnail.png";
//import social from "../assets/SocialNetwork - Functionalities Mark 2 - Thumbnail.jpg";
//import dashboard from "../assets/Dashboard-Thumbnail.webp";
//import Resume from "../components/Resume";

// const Projects = () => {
//   const topProjects = [
//     {
//       id: "01",
//       title: "Memories",
//       thumbnail: memories,
//       video:
//         "https://res.cloudinary.com/mksh400/video/upload/v1677522816/Portfolio/Memories_jucigw.mp4",
//       description:
//         "Experience the power of MERN stack in our Memories application! Harnessing MongoDB for data storage, ExpressJS for server-side development, ReactJS for dynamic user interfaces, and NodeJS for backend support. Integrated with Google OAuth for seamless login, Redux and Redux-Thunk for state management, and enhanced with React Hooks and CORS for flexibility. Delve into our rich feature set and unleash the potential of Context/RESTful API integration. Unleash your memories today!",
//       link: "https://memories-wheat.vercel.app",
//     },
//     {
//       id: "02",
//       title: "Stack Overflow Clone",
//       thumbnail: stack,
//       video:
//         "https://res.cloudinary.com/mksh400/video/upload/v1677522473/Portfolio/Stack-Overflow-Clone_i8ggps.mp4",
//       description:
//         "Discover a powerful Stack Overflow clone built on the MERN stack. Harness the potential of MongoDB, ExpressJS, ReactJS, and NodeJS, combined with advanced features like Axios, Redux, Redux-Thunk, React Hooks, CORS, and Context/RESTful API integration. Enjoy a seamless experience in a feature-rich environment for all your coding queries and discussions.",
//       link: "https://stackoverflow-mukesh.netlify.app",
//     },
//     {
//       id: "03",
//       title: "YouTube Clone",
//       thumbnail: youtube,
//       video:
//         "https://res.cloudinary.com/mksh400/video/upload/v1690720403/Portfolio/YouTube-Clone_f1tl2t.mp4",
//       description:
//         "The fully responsive YouTube Clone application built with React.js, the YouTube API, Axios, and Bootstrap aimsto replicate the core functionality and user experience of YouTube while providing a seamless and intuitiveinterface for users to discover, watch, and engage with videos.",
//       link: "https://you-tube-clone-orcin.vercel.app",
//     },
//     {
//       id: "04",
//       title: "Dashboard",
//       thumbnail: dashboard,
//       video: "",
//       description:
//         "Experience the ultimate MERN Stack Admin Dashboard - efficient, user-friendly, and powerful. Manage projects, visualize data with Nivo Charts, and enjoy seamless state management with Redux Toolkit. Our backend runs on Node JS, Express JS, Mongoose, and MongoDB, providing a robust foundation for your success. Take control of your data and productivity today!",
//       link: "https://dashboard-smoky-three.vercel.app",
//       danger: "This Project is Under Development! But You can View It Live.",
//     },
//   ];

//   const olderProjects = [
//     {
//       id: "01",
//       title: "E-Commerce",
//       thumbnail: ecommerce,
//       video:
//         "https://res.cloudinary.com/mksh400/video/upload/v1677433153/Portfolio/E-Commerce_Web_App_vks4xk.mp4",
//       description:
//         "Experience seamless online shopping with our React-based e-commerce app. Powered by ReactJS, Firebase, and Firestore, it utilizes Context API, AJAX, and React Hooks for smooth interactions. With Express, CORS, NodeJS, and RESTful API integration, it ensures secure and efficient data management. Enjoy a user-friendly interface and hassle-free transactions.",
//     },
//     {
//       id: "02",
//       title: "Prime Video Clone",
//       thumbnail: primevideo,
//       video:
//         "https://res.cloudinary.com/mksh400/video/upload/v1677433139/Portfolio/Prime_Video_Clone_-_Mark_2_rvaaxv.mp4",
//       description:
//         "Discover a captivating streaming experience with our Prime Video clone website. Crafted with HTML, CSS, and Javascript, it offers a vast library of movies and TV shows for your enjoyment. Immerse yourself in high-quality content, user-friendly navigation, and personalized recommendations, all within a sleek and intuitive interface. Start binge-watching today!",
//     },
//     {
//       id: "03",
//       title: "Netflix Clone",
//       thumbnail: netflix,
//       video:
//         "https://res.cloudinary.com/mksh400/video/upload/v1677432866/Portfolio/Netflix_Clone_-_Mark_2_v26jzf.mp4",
//       description:
//         "Introducing our Netflix clone website! Built using HTML, CSS, and Javascript, this platform offers a seamless streaming experience. Enjoy a vast library of movies and TV shows, personalized recommendations, and user-friendly interface. Dive into the world of entertainment and binge-watch your favorite content at your convenience.",
//     },
//   ];

//   return (
//     <div>
//       <Resume />
//       <div className="pt-5 mt-5 container container-fluid">
//         <h2 className="pb-2 border-bottom">Top Applications</h2>
//         <div className="row row-cols-1 mb-5">
//           <div className="col">
//             <div
//               className="card shadow h-100 rounded-3 top--project mx-auto"
//               data-aos="zoom-in"
//             >
//               <div className="card-header">
//                 <h4 className="text-center">SocialNetwork</h4>
//               </div>
//               <video
//                 src="https://res.cloudinary.com/mksh400/video/upload/v1677522935/Portfolio/SocialNetwork_-_Functionalities_-_Mark_2_ilzcad.mp4"
//                 poster={social}
//                 width="100%"
//                 controls
//               ></video>
//               <title>SocialNetwork</title>
//               <div className="card-body">
//                 <p className="card-text">
//                   Discover a powerful MERN stack social network app, fueled by
//                   MongoDB, ExpressJS, ReactJS, and NodeJS. Experience seamless
//                   media management with Cloudinary integration and efficient
//                   email communication through SendGrid Email API. Leveraging
//                   React Hooks, CORS, Context/RESTful API, and a plethora of
//                   other cutting-edge technologies, this app redefines the social
//                   networking landscape.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row row-cols-1 row-cols-md-2 g-3 mb-5">
//           {topProjects.map((project) => (
//             <div className="col" key={project.id} data-aos="zoom-in">
//               <div className="card shadow h-100 rounded-3">
//                 <div className="card-header">
//                   <h4 className="text-center">{project.title}</h4>
//                 </div>
//                 <video
//                   src={project.video}
//                   poster={project.thumbnail}
//                   width="100%"
//                   controls
//                 ></video>
//                 <title>{project.title}</title>
//                 <div className="card-body">
//                   <p className="text-warning m-0 p-0">{project.warning}</p>
//                   <p className="text-danger m-0 p-0">{project.danger}</p>
//                   <p className="card-text">{project.description}</p>
//                 </div>
//                 <div className="card-footer">
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <button type="button" className="btn btn-outline-primary">
//                       View Live 👀
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <h2 className="pb-2 border-bottom">Older Projects</h2>
//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5 pb-4">
//           {olderProjects.map((project) => (
//             <div className="col" key={project.id} data-aos="zoom-in">
//               <div className="card shadow h-100 rounded-3">
//                 <div className="card-header">
//                   <h4 className="text-center">{project.title}</h4>
//                 </div>
//                 <video
//                   src={project.video}
//                   poster={project.thumbnail}
//                   width="100%"
//                   controls
//                 ></video>
//                 <title>{project.title}</title>
//                 <div className="card-body">
//                   <p className="card-text">{project.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
