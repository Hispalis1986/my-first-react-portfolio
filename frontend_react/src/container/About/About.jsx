import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./About.scss";

const abouts = [
  {
    title: "MERN Stack",
    description: "I am a good MERN stack.",
    imgUrl: images.about01,
  },
  {
    title: "Frontend Developer",
    description: "I am a good frontend developer.",
    imgUrl: images.about02,
  },
  {
    title: "Backend Developer",
    description: "I am a good backend developer.",
    imgUrl: images.about03,
  },
  {
    title: "Twitch Streamer",
    description: "I am a good Twitch Streamer.",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Apps</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
