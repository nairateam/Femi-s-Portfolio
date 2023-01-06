import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import aboutWork from "../Media/about-work.svg";
import vector from "../Media/Icons/Vector.svg";

const animateHead = {
  setOff: { x: -100, opacity: 0 },
  setIn: { x: 0, opacity: 1 },
  transition: { delay: 0.1, duration: 0.5 },
};
const imageVariant = {
  zoom: {
    scale: 1.1,
    transition: {
      repeat: Infinity,
      duration:4.5
    },
  },
};

const animateText = {
  setOff: { y: 100, opacity: 0 },
  setIn: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      delay: 0.2,
      duration: 1.5,
    },
  },
};
const About = () => {
  return (
    <div>
      <div className="about_flex" id="about" smooth>
        <motion.div
          initial={"setOff"}
          whileInView={"setIn"}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.5 }}
          className="about_item"
        >
          <motion.h2 variants={animateHead} className="page_title">
            About <span>Me</span>
          </motion.h2>
          <motion.p variants={animateText}>
          As a frontend developer with a strong background in React, I am excited to bring my skills and experience to a company that values innovation and creativity. With a passion for building visually appealing and user-friendly websites, I am confident in my ability to turn complex project requirements into intuitive and functional designs.

            Throughout my career, I have had the opportunity to work on a variety of projects, ranging from small business websites to large-scale e-commerce platforms. This has allowed me to develop a diverse skill set, including proficiency in responsive design, cross-browser compatibility, and performance optimization.

            In addition to my technical skills, I am a strong communicator and thrive in collaborative environments. I am excited to join a team where I can contribute my skills and ideas, and continue to learn and grow as a developer. Below are the
            technologies and tools I work with:
          </motion.p>
          <motion.h2 variants={animateHead} className="page_title">
            Stacks & <span>Technology</span>
          </motion.h2>
          <div className="about_stack">
            <motion.ul variants={animateText}>
              <li>
                {" "}
                <img src={vector} alt="" /> HTML
              </li>
              <li>
                {" "}
                <img src={vector} alt="" /> CSS
              </li>
              <li>
                {" "}
                <img src={vector} alt="" /> JS
              </li>
            </motion.ul>
            <motion.ul variants={animateText}>
              <li>
                {" "}
                <img src={vector} alt="" /> ReactJs
              </li>
              <li>
                {" "}
                <img src={vector} alt="" /> NextJs
              </li>
              <li>
                {" "}
                <img src={vector} alt="" /> Firebase
              </li>
            </motion.ul>
            <motion.ul variants={animateText}>
              <li>
                {" "}
                <img src={vector} alt="" /> SASS
              </li>
              <li>
                {" "}
                <img src={vector} alt="" /> Tailwind
              </li>
              <li>
                {" "}
                <img src={vector} alt="" /> Wordpress
              </li>
            </motion.ul>
          </div>
        </motion.div>
        <div className="about_item">
          <motion.img
            whileInView="zoom"
            variants={imageVariant}
            src={aboutWork}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
