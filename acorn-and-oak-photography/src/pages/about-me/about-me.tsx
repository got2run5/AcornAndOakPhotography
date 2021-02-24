import React from 'react';
import './about-me.css';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import about_me_image from "./../../images/about_me.jpg";
import resume from "./../../images/resume.pdf";

function AboutMe() {
  const openLinkedIn = () => { window.open('https://www.linkedin.com/in/hartmannk', '_blank') };

  const openResume = () => { window.open(resume, '_blank') }

  return (
    <div className="about-me-wrapper">
      <h2>About Me</h2>
      <img id="about-me-img" src={about_me_image}></img>
      <section>
        <p>
          You might expect to find a perfectly exquisite photo of a photographer here, along
          with a story that would make you inclined to pick them as the person to freeze an image in time
          for your wedding, bar mitzvah, or 41<sup>st</sup> birthday party. Unfortunately,
          I've commandeered this page to talk about myself as well as this site.
        </p>

        <p>
          My prior experience building full stack applications primarily relied upon .net core
          paired with Angular as a front end framework.  This website is my first foray into React
          and was completed in approximately 10 hours spent over 4 days. I consider myself fluent in
          the following technologies, with "just like riding a bike" experience in several more.
        </p>
      </section>
      <ul>
        <li>
          C# .NET
        </li>
        <li>
          Microservices / SOA
        </li>
        <li>
          Splunk
        </li>
        <li>
          Angular / HTML / CSS
        </li>
        <li>
          SQL (SQL Server most recently)
        </li>
        <li>
          Agile SDLC
        </li>
        <li>
          WPF
        </li>
      </ul>
      <p>
        Previous projects I have worked on have ranged from designing integrations with different vendors
        and partners (Google Plex and Hearsay Social among others), to greenfield developments and complete
        redesigns.  Along the way, I've learned new things from everyone I've worked with, delivered a multitude of projects successfully, 
        and even used my experience as a private tutor to onboard an entire team onto a technology they had previously never
        used.
      </p>
      <p>
        Outside of work, I enjoy spending a lot of time outdoors.  During vacations, this takes the form
        of 20 mile day-hikes or spending time on the lake fishing.  Other times, it means fixing up the 1927
        home my fiance and I bought a year ago.
      </p>
      <p>
        If you would like to dive further into my work experience and skills not listed here, please
        visit my LinkedIn page or download my resume below.
      </p>
      <div className="about-me-button-container">
        <div>
          <Button variant="contained" color="primary" className="about-me-button" onClick={openLinkedIn}>
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          Kyle on linkedin
        </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" className="about-me-button" onClick={openResume}>
            <FontAwesomeIcon icon={faFileDownload} size="lg" />
              Kyle's Resume
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
