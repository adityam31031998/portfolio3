import React from "react";
import "./About.css";
import { saveAs } from "file-saver";

const About = () => {
  const handleDownload = () => {
    saveAs("./resume.pdf", "AdityaResume.pdf");
  };
  return (
    <div className="aboutContainer">
      <h1 className="item">About Me</h1>
      <h1 className="item">.</h1>
      <img className="item" src="./profile.png" alt="loading" width={"100px"} />
      <p className="item">
        Hello, my name is Aditya. I am currently pursuing my Master's in
        Computer Applications at Jain College. I come with a strong background
        in DevOps, where I have accumulated two years of hands-on experience.
        During my time in the field, I developed a keen interest in becoming a
        Full Stack and MERN Stack developer. In pursuit of this goal, I made a
        deliberate decision to further my skills by leaving my previous role and
        enrolling in an offline course. This experience allowed me to gain
        valuable knowledge and practical insights, which I applied in various
        projects. In addition to my professional journey, I come from a family
        of four. My father is involved in business, my elder brother is working
        in the dynamic field of data science in the IT sector, and my mother
        takes care of our home. These experiences and my educational background
        have equipped me with a strong foundation, and I am enthusiastic about
        bringing my skills and passion for development to contribute effectively
        to your team
      </p>
<div className="item">

      <h1 >Personal Information</h1>
      <br />
      <p>
        <u>Name</u>: Aditya .M <br />
        <br />
        <u>Age</u>: 26 Years
        <br />
        <br />
        <u>Residence</u>: #1a,Kodigehalli AmcoLayout near Narayana school
        Bangalore-560092
        <br />
        <br />
        <u>Email</u>: aditya31031998@gmail.com <br />
        <br />
        <u>Phone</u>: (+91)9066910183
        <br />
        <br />
        <u>Work</u>: Full Time, Any Shift.
        <br />
        <br />
        <button className="resumeDownload" onClick={handleDownload}>
          Download Resume
        </button>
      </p>
</div>
    </div>
  );
};

export default About;
