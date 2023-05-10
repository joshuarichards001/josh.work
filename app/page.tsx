import Link from "next/link";
import { ArrowIcon, CVIcon, GitHubIcon, LinkedinIcon } from "./components/icons";
import Image from "next/image";
import { inlineLinkStyles, linkStyles } from "./constants";

export default function Home() {
  return (
    <main className="flex">
      <div>
        <h1 className="font-bold text-3xl font-serif">Josh Richards</h1>
        <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
          Hey, I'm Josh. I'm a{" "}
          <a className={inlineLinkStyles} href="/work">
            Software Engineer at Xero
          </a>{" "}
          where I help modernise the Invoicing Platform. I also love to build{" "}
          <a className={inlineLinkStyles} href="/projects">
            simple web apps
          </a>{" "}
          to solve everyday problems.
        </p>
        <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
          <Image className="transition ease-linear rounded-full" src="/avatar.jpeg" width="100" height="100" alt="me" />
          <div className={"mt-8 md:mt-0 ml-0 md:ml-6 space-y-2"}>
            <Link href="/cv.pdf" className={linkStyles}>
              <CVIcon />
              {`CV / Resume`}
            </Link>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/joshuarichards001"
              className={linkStyles}
            >
              <GitHubIcon />
              {`GitHub Profile`}
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/joshua-stewart-richards/"
              className={linkStyles}
            >
              <LinkedinIcon />
              {`Linkedin Profile`}
            </a>
          </div>
        </div>
        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
          At{" "}
          <a className={inlineLinkStyles} href="/work">
            Xero
          </a>{" "}
          I am a part of the team building a modernised invoicing experience for hundreds of thousands of small
          businesses a month. I work along the full stack using React, C#, and AWS.
        </p>
        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
          In addition to my work at Xero, I enjoy working on{" "}
          <a className={inlineLinkStyles} href="/projects">
            personal projects
          </a>{" "}
          that solve everyday problems. It's always exciting to share my projects with others and gain their interest
          through forums like Reddit and ProductHunt.
        </p>
        <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-orange-800 dark:text-orange-300">
          <li>
            <a
              className={linkStyles}
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:hello@josh.work"
            >
              <ArrowIcon />
              <p className="h-7">hello@josh.work</p>
            </a>
          </li>
          {/* <li>
            <a
              className={linkStyles}
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/joshrichardsdev"
            >
              <ArrowIcon />
              <p className="h-7">follow me on twitter</p>
            </a>
          </li> */}
        </ul>
      </div>
    </main>
  );
}
