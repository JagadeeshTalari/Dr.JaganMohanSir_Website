import React from "react";
// import { FaBeer, FaIceCream, FaUser } from "react-icons/fa";
import "./AboutUs.css";
import { Outlet } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div className="AboutUsPage">
        <h2>About</h2>
        {/* <FaBeer className='beerIcon'/>
        <FaUser/>
        <FaIceCream/>
        <img width={200} src="./images/mediate.jpg" alt="Hey I am not working" />
        <img width={200} src="./images/experience.png" alt="Hey I am not working" /> */}
        <p>
          Mr.JAGAN MOHAN.METLAPALLI. M.D., D.M is a qualified Gastroenterologist
          with over 40 years of experience in treating all problems related to
          Gastro and Others. Dr.Jagan Mohan worked as Professor in
          Gastroenterology in various Medical Colleges, Now in Medical College
          of Vijayawada.
        </p>
        <p>
          In Other view He is a Usui Reiki Grand Master and also he did root
          level work in NLP, SILVA METHOD, PERSONALITY DEVELOPMENT skills.
          Parallel to doctor profession he is a professional instructor of
          REIKI, SILVA, NLP AND PERSONALITY DEVELOPMENT SKILLS over 20 years.
        </p>
        <p>
          He proposed different types of new mediation and personality
          development procedures to solve the problems related to now a day’s
          employees, students, house wives, and children and for every one
          common people to professional.
        </p>
        <p>
          Every Month he conducts training classes, seminars for the students,
          employees to enhance their skills, at colleges, offices and at his own
          office. As a visiting consultant, he trained so many people of
          different areas.
        </p>
        <p>
          From last 30 years of experience from various fields, Mr.Jagan
          Mohan.Metlapalli authored the best books “O Manishi Please Relax”,
          “Reiki” and So many articles in different areas, they published by
          magazines, news papers like HINDU, DC.
        </p>
      </div>
      <div>
        <div className="ExperienceSection">
          <img src="./images/experience.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
