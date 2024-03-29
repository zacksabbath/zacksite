import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "./Resume.module.scss";

const Resume: NextPage = () => (
  <div className={styles.resumecontainer}>
    <Head>
      <title>Zack Rose - Resumé</title>
      <meta name="description" content="Zack Rose Professional Resume" />
    </Head>
    <div className={styles.whiteSide}>
      <div className={styles.resumephoto}>
        <Link href="/">
          <div className={styles.zackengineer}>
            <Image
              src="/images/zackengineer.png"
              alt="Zack Rose - Front End Engineer"
              width={713}
              height={829}
              layout="intrinsic"
              />
          </div>
        </Link>
      </div>
    </div>
    <div className={styles.blackSide}>
      <div className={styles.resumetext}>
        <h1>Resum&eacute;</h1>
        <div className={styles.download}>
          <a href="https://drive.google.com/file/d/1kkH2QRGivjlGuY1IzQP7F-xg_vl9AXkk" target='_blank' rel="noopener noreferrer">(Download)</a>
        </div>

        <h2>Summary</h2>
        <p>
        Software engineer with a Computer Science degree and over a decade experience working on web applications, specializing in React / React Native and component based development. 
        </p>

        <h2>Skills</h2>
        <p>
          <strong>Front-end:</strong> React, Redux, Webpack, ES6, Babel, Insula,
          ESLint, Sass, CSS Modules
        </p>
        <p>
          <strong>Mobile:</strong> React Native, Android (Java / Kotlin)
        </p>
        <p>
          <strong>Back-end:</strong> Node.js, Express, Java, Clojure
        </p>
        <p>
          <strong>Testing:</strong> Jest, Enzyme, Groovy, Geb, Selenium, Appium
        </p>
        <p>
          <strong>Data:</strong> mySQL, PostgreSQL, Microsoft SQL Server,
          Oracle, JSON, NoSQL, MongoDB
        </p>
        <p>
          <strong>DevOps:</strong> Jenkins, AWS
        </p>

        <h2>Experience</h2>

        <h3>Under Construction!</h3>
        <h3>Thanks for your patience!</h3>

        <h3><br /><br /><br /></h3>

        <h3>Craftsy</h3>
        <h4>
          Front-End Engineer, Denver, Colorado (April 2016 to August 2018)
        </h4>
        <ul>
          <li>
            {" "}
            Built features in React / React Native using Redux and Insula for
            state management.
          </li>
          <li>
            {" "}
            Worked on 3 major site releases:
            <ul>
              <li>
                {" "}
                Development of 2.0 architecture (legacy code to a React / Redux
                environment) in 2016
              </li>
              <li>
                {" "}
                Development of the “Craftsy Unlimited” video streaming service
                in 2017; consisting of React / Redux website and React Native
                iOS and Android apps
              </li>
              <li> Rebranding of Craftsy Unlimited to Bluprint in 2018.</li>
            </ul>
          </li>
          <li>
            {" "}
            Rigorous unit / integration testing using Jest / Enzyme and
            functional testing using Groovy / Geb / Selenium / Appium
          </li>
        </ul>

        <h3>Code for Denver Organization (a Brigade of Code for America)</h3>
        <h4>
          Front-End Web Developer, Denver, Colorado (September 2015 to April
          2016, August 2018 to Present) (Volunteer)
        </h4>
        <ul>
          <li>
            Worked on “Feed” project for the Rocky Mountain Farmer&apos;s Union
 working alongside a small team of designers/developers. Built
            static mockups into dynamic pages using Bootstrap, HTML5, CSS3, and
            ClojureScript, defining the look of the page.
          </li>
          <li>
            Tech lead on full redesign of Code For Denver website using React.
          </li>
          <li>
            Helped beginner programmers get a head start in understanding the
            overall web process.
          </li>
          <li>
            Currently working on a databases for low income housing and
            student-teacher resources, in addition to an internal members
            portal.
          </li>
        </ul>

        <h3>Self Education</h3>
        <h4>Denver, Colorado (October 2013 to April 2016)</h4>
        <ul>
          <li>
            Regularly spent time with online courses on Code School, Front-End
            Masters, and Egghead.io, studying and keeping up to date with
            CSS/HTML fundamentals, Javascript, Node.JS, React, and Responsive
            Design principles.
          </li>
          <li>
            Worked on personal website / projects, experimenting with various
            technologies including React, Javascript, mySQL, Less/Sass, and
            HTML5/CSS3.
          </li>
        </ul>

        <h3>The Sherwin-Williams Company</h3>
        <h4>
          Front-End Web Developer, Cleveland, Ohio (February 2011 to October
          2013)
        </h4>
        <ul>
          <li>
            Website maintenance for Sherwin-Williams website, using multitude of
            technologies including CSS, HTML, JavaScript/JQuery, Classic ASP,
            Java Server Pages, Java debugging to locate back-end issues.
          </li>
          <li>
            Key resource in implementation of Oracle UCM and technical liaison
            in customizing the Content Management user interface.
          </li>
          <li>
            Project work including implementation of new page designs, hand
            coded CSS and JQuery scripting.
          </li>
          <li>
            Design Slicing and image manipulation using Adobe Photoshop and
            other related software.
          </li>
          <li>
            Designed Oracle and mySQL database queries for retrieving, updating,
            and inserting data into multiple schemas.
          </li>
          <li>
            Gained intensive experience in team environment using version
            control (mainly Git) to manage development.
          </li>
        </ul>

        <h3>JumpStart Inc.</h3>
        <h4>Consultant, Cleveland, Ohio (January 2007 to February 2011)</h4>
        <ul>
          <li>
            Designed and implemented the Ohio Fuel Cell Coalition portal
            website, which combines ASP.Net and MSSQL technologies.
          </li>
          <li>Recorded and prepared various JumpStart Podcasts.</li>
          <li>
            Used Flash to create multi-media projects for the Ohio Fuel Cell
            Coalition.
          </li>
          <li>
            Created various web applications using Perl, PHP, SQL, and others.
          </li>
          <li>
            Ported and moved web servers, including transfers from Apache to IIS
            and Perl to PHP.
          </li>
          <li>
            Data processing using Microsoft Access and Excel in conjunction with
            SalesForce.
          </li>
        </ul>
        <h4>IT Assistant, Cleveland, Ohio (February 2005 to October 2006)</h4>
        <ul>
          <li>
            Provided technical support to seven different companies, maintaining
            servers / organizing backups on various machines.
          </li>
          <li>
            Responsible for installing and programming unified messaging and
            applications running on an Intertel Phone System.
          </li>
          <li>Provided customer support and training.</li>
          <li>Created documentation for technical aspects.</li>
          <li>
            Designed and maintained websites using various methods including
            Apache, IIS, HTML, CSS, PHP, and Perl.
          </li>
        </ul>

        <h3>
          Northwestern University, Center for Talent Development, Equinox
          Program
        </h3>
        <h4>
          Instructor, Computer Game Design, Cleveland, Ohio
          <br />
          (Summer 2008, Case Western Reserve University campus)
        </h4>
        <ul>
          <li>
            Taught gifted high-school students advanced C# programming with the
            XNA environment.
          </li>
        </ul>

        <h3>
          Case Western Reserve University, Information, Technology, and Academic
          Computing
        </h3>
        <h4>
          Student Technology Consultant, Cleveland, Ohio (May 2002 to May 2004)
        </h4>
        <ul>
          <li>
            Completed service calls (on-site and phone) to help instructors with
            various time-critical IT issues.
          </li>
          <li>
            Installed new equipment/peripherals such as hard drives and RAM
            chips, wireless, and networking installations.
          </li>
          <li>Designed and maintained over 20 web pages using HTML and CSS.</li>
          <li>Authored and managed training documentation for client use.</li>
          <li>
            Worked with team to create an interactive, multi-media Flash CD to
            introduce first year students to campus.
          </li>
        </ul>

        <h2>Education</h2>
        <p>
          <Link href="http://case.edu" target="_blank" rel="noreferrer">
            Case Western Reserve University
          </Link>
          , Cleveland, Ohio <br />
          BA in{" "}
          <Link
            href="http://engineering.case.edu/eecs/"
            target="_blank"
            rel="noreferrer"
          >
            Computer Science
          </Link>
          , May 2008
          <br />
          Minor: Music <br />
          Sequences: French and Psychology
        </p>

      </div>


    </div>
  </div>
);

export default Resume;
