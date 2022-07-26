import type { NextPage } from "next";
import styles from "./Landing.module.scss";
import Link from "next/link";
import {FaLinkedin, FaEnvelope, FaGithub} from "react-icons/fa"

const Home: NextPage = () => (
  <div className={styles.zackdots}>
    <main>
      <article>
        <header className={styles.mainheader}>
          <h1>
            Zack
            <br />
            Rose
          </h1>
          <h2>
            Front-End
            <br />
            <span className="jobtitle">Engineer</span>
          </h2>
        </header>

        <section className={styles.blurb}>
          <p className={styles.info}>
            Hello! and welcome. I am a front-end developer currently residing in
            Portland, Oregon. I have a Computer Science degree from
            <Link href="http://case.edu" target="blank">
              Case Western Reserve University
            </Link>
            and over 10 years experience working with websites. I have been
            using/loving React since 2015, and in the last couple years have
            migrated fully to Typescript. I love to solve creative problems and
            help software grow.
          </p>

          <p className={styles.info}>
            I&apos;m currently developing with{" "}
            <Link href="https://populist.us" target="_blank" rel="noreferrer">
              Populist
            </Link>
            . We are creating a platform to empower voters make informed,
            non-partisan decisions.
          </p>

          <p className={styles.info}>
            Feel free to check out my resume or contact me via the links below.
          </p>

          <hr />

          <p className={styles.info}>
            Some javascript libraries I use and love:
          </p>
          <ul>
            <li>
              <Link
                className={styles.link}
                href="https://styled-components.com/"
                target="blank"
              >
                Styled Components
              </Link>{" "}
              - my personal favorite CSS-in-JS solution.
            </li>
            <li>
              <Link
                className={styles.link}
                href="https://react-query.tanstack.com/"
                target="blank"
              >
                React Query
              </Link>{" "}
              - stripped down, powerful suite for interacting with APIs (GraphQL
              or REST).
            </li>
            <li>
              <Link
                className={styles.link}
                href="https://color2k.com/"
                target="blank"
              >
                Color2k
              </Link>{" "}
              - great little color manipulation library.
            </li>
            <li>
              <Link
                className={styles.link}
                href="https://react-icons.github.io/react-icons/"
                target="blank"
              >
                React Icons
              </Link>{" "}
              - lightweight, bundle-concious, consolidated collection of icons,
              featuring FontAwesome and others.
            </li>
            <li>
              <Link
                className={styles.link}
                href="https://www.npmjs.com/package/webpack-bundle-analyzer"
                target="blank"
              >
                Webpack Bundle Analyzer
              </Link>{" "}
              - amazing tool for visualizing your Webpack bundle.
            </li>
          </ul>

          <div className={styles.landinglinks}>
            <Link
              href="https://www.linkedin.com/in/zachary-rose-b7898a88"
              target="blank"
            >
              <span className={styles.landinglink}>
                <FaLinkedin className={styles.moveDown} />
              </span>
            </Link>
            <Link
              
              href="https://github.com/zacharyrose"
              target="blank"
            >
              <span className={styles.landinglink}>
                <FaGithub className={styles.moveDown} />
              </span>
            </Link>
            <Link
              
              href="mailto:zachary.f.rose@gmail.com"
            >
              <span className={styles.landinglink}>
                <FaEnvelope className={styles.moveDown} />
              </span>
            </Link>
            
            <Link
              
              href="/resume"
            >
              <span className={`${styles.landinglink} ${styles.resumelink}`}>
                Resum&eacute;
                </span>
              </Link>
          </div>
        </section>
      </article>
    </main>
  </div>
);

export default Home;