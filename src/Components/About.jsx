/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description = `Software engineer with 4.8 years of experience building scalable backend systems using Node.js, Express,
and PostgreSQL/MySql. Proficient in designing RESTful APIs, improving database efficiency, and
implementing secure, maintainable code. Collaborates effectively with frontend teams using Angular to
ensure smooth API integration and end-to-end feature delivery.`;

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "JavaScript",
  "TypeScript",
  "Core Java",
  "HTML",
  "CSS",
  "Node.js",
  "Express.js",
  "Angular 18",
  "Sequelize",
  "PostgreSQL",
  "MySql",
  "Azure Blob",
  "AWS S3",
  "Docker",
  "Git",
  "Jest",
  "BullMQ",
  "Redis (Caching)",
  "Postman",
  "REST APIs",
  "Rate Limiting",
  "Authentication",
  "JWT",
  "OAuth 2.0",
  "Role-based Access Control (RBAC)",
  "Object-Oriented Programming (OOP)",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I'm passionate about solving complex problems with clean, scalable backend solutions, bringing a creative mindset to drive innovation. With expertise in backend development and Angular, I continually seek better ways to make technology more efficient, intuitive, and accessible for all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
