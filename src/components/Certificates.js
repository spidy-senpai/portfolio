import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import Badge from './Badge.js'; // Adjust the import path as necessary

function Certificates() {
    const [select, setSelect] = useState('All');

    const cards = [
      {
        "id": 1,
        "category": "individual",
        "image": "https://drive.google.com/file/d/1OubbBISLQi8LkaWd3Mto6La9xX2SLqc3/view?usp=drive_link",
        "title": "Filler",
        "content": "An AI-powered application capable of hallucinating and restoring color to grayscale images. By training a Convolutional Neural Network (CNN) on large datasets of images, the model learns to associate grayscale patterns and textures with their probable color values.How it Works: The system uses the LAB color space instead of RGB.Input: The network takes the 'L' channel (Lightness/Grayscale) as input.Processing: The model analyzes textures (e.g., recognizing grass, sky, or skin) to predict the missing components.Output: It generates the 'a' and 'b' channels (the color information).Result: The predicted color channels are merged with the original lightness channel to produce a vibrant, colorized image without losing the original details.Key Features:Automatic conversion of B&W legacy photos to color.Utilizes deep learning to understand context (e.g., sky is blue, foliage is green).Preserves the structural integrity and resolution of the original image.",
        "technologies": ["HTML", "JavaScript", "Python", "CSS"],
        "links": [
          {
            "icon": <FaGithub />,
            "name": "Github",
            "link": "https://github.com/spidy-senpai/filler.git"
          },
          {
            "icon": <CiShare1 />,
            "name": "Visit",
            "link": "https://filler-cicu.vercel.app/"
          }
        ]
      },
      // {
      //   "id": 2,
      //   "category": "individual",
      //   "image": "https://s3-alpha.figma.com/hub/file/1271832110/cdcd2381-7724-4076-8bd6-97dbc4e30ac7-cover.png",
      //   "title": "YouTube Clone",
      //   "content": "This project is a full-stack application that replicates core features of YouTube, allowing users to search, watch, and upload videos. It leverages React for the front-end, with a seamless user experience for browsing video content and interacting with the platform.",
      //   "technologies": ["React", "Bootstrap", "Firebase"], // Change to array
      //   "links": [
      //     {
      //       "icon": <FaGithub />,
      //       "name": "Github",
      //       "link": "https://github.com/shakeen17/Paradise-Restaurant"
      //     },
      //     {
      //       "icon": <CiShare1 />,
      //       "name": "Visit",
      //       "link": "https://connect-us-sage.vercel.app/"
      //     }
      //   ]
      // },
      // {
      //   "id": 3,
      //   "category": "individual",
      //   "image": "https://cdn.dribbble.com/userupload/3361221/file/original-1a631dceb9ecafec254c29be25d5225d.jpg?resize=1024x768&vertical=center",
      //   "title": "Trendix",
      //   "content": "Trendix is a full-stack e-commerce platform that provides a seamless shopping experience. It is built using React for the front-end, Tailwind CSS for styling, and Spring Boot for the back-end, ensuring a robust and scalable architecture.",
      //   "technologies": ["React", "Tailwind CSS", "Spring Boot", "Material UI"],
      //   "links": [
      //     {
      //       "icon": <FaGithub />,
      //       "name": "Github",
      //       "link": "https://github.com/shakeen17/Paradise-Restaurant"
      //     },
      //     {
      //       "icon": <CiShare1 />,
      //       "name": "Visit",
      //       "link": "https://trendix-seven.vercel.app/"
      //     }
      //   ]
      // },
      // {
      //   "id": 4,
      //   "category": "individual",
      //   "image": "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=500&h=400",
      //   "title": "Filler",
      //   "content": "This project provides a comprehensive solution for [project purpose]. It showcases modern development practices with a clean, intuitive user interface. The application demonstrates proficiency in full-stack development with seamless integration between frontend and backend components.",
      //   "technologies": ["React", "JavaScript", "CSS", "HTML", "Node.js"],
      //   "links": [
      //     {
      //       "icon": <FaGithub />,
      //       "name": "Github",
      //       "link": "https://github.com/spidy-senpai/filler.git"
      //     },
      //     {
      //       "icon": <CiShare1 />,
      //       "name": "Live Demo",
      //       "link": "#"
      //     }
      //   ]
      // }
      
    ];

    
    return (
      <div className="max-w-screen-lg mx-auto p-5">
      {/* Section title */}
      <div className="text-center mb-5">
          <div className="text-3xl font-bold">My Portfolio</div>
          <div className="text-gray-500 text-md">Recent Works</div>
      </div>

      {/* Filter buttons */}
      <div className="flex w-full gap-6 items-center justify-center text-center">
          <button
              onClick={() => setSelect('All')}
              className={`p-2 rounded-full w-24 ${select === 'All' ? 'bg-gray-900 text-white' : 'bg-gray-400 text-gray-100'}`}
          >
              All
          </button>
          <button
              onClick={() => setSelect('Individual')}
              className={`p-2 size-md rounded-full w-24 ${select === 'Individual' ? 'bg-gray-900 text-white' : 'bg-gray-400 text-gray-100'}`}
          >
              Individual
          </button>
          <button
              onClick={() => setSelect('Group')}
              className={`p-2 size-md rounded-full w-24 ${select === 'Group' ? 'bg-gray-900 text-white' : 'bg-gray-400 text-gray-100'}`}
          >
              Group
          </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {cards.map((card) => (
              (select === 'All' || card.category.toLowerCase() === select.toLowerCase()) && (
                  <div key={card.id} className="border border-white p-2 rounded-3xl shadow-md">
                      <div className="p-5 rounded-lg flex flex-col items-start">
                          {/* Card image */}
                          <img
                              src={card.image}
                              className="w-full h-48 rounded-2xl mb-2"
                              alt={card.title}
                          />
                          {/* Card header */}
                          <h2 className="text-black text-xl font-semibold mb-1">
                              {card.title}
                          </h2>
                          {/* Card content */}
                          <p className="text-justify text-gray-600 h-36 mb-3">
                              {card.content}
                          </p>
                          {/* Card technologies */}
                          <div className="flex flex-wrap mt-4">
                              {card.technologies.map((tech, index) => (
                                  <Badge key={index} technology={tech} />
                              ))}
                          </div>
                          {/* Card links */}
                          <div className="flex gap-6 mt-4">
                              {card.links.map((s, index) => (
                                  <a key={index} href={s.link} className="flex items-center gap-2 text-md">
                                      {s.icon} {s.name}
                                  </a>
                              ))}
                          </div>
                      </div>
                  </div>
              )
          ))}
      </div>
  </div>
);
}

export default Certificates;