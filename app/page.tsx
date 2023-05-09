import Link from "next/link";
import { ArrowIcon, CVIcon, GitHubIcon, LinkedinIcon } from "./components/icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex">
      <div>
        <h1 className="font-bold text-3xl font-serif">Josh Richards</h1>
        <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
          Hey, I'm Josh. I'm a <b>Software Engineer at Xero</b> where I help modernise the Invoicing Platform
        </p>
        <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
          <Image className="rounded-full" src="/avatar.jpeg" width="100" height="100" alt="me" />
          <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
            <Link href="/cv.pdf" className="flex items-center gap-2">
              <CVIcon />
              {`CV / Resume`}
            </Link>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/joshuarichards001"
              className="flex items-center gap-2"
            >
              <GitHubIcon />
              {`GitHub Profile`}
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/joshua-stewart-richards/"
              className="flex items-center gap-2"
            >
              <LinkedinIcon />
              {`Linkedin Profile`}
            </a>
          </div>
        </div>
        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
          After completing the Graduate Program at Xero I've settled down in the Invoicing Team. I am a part of the team
          building a modernised invoicing experience to hundreds of thousands of businesses a month. I work with the
          Frontend, Backend and Infrastructure using React, C#, and AWS respectively.
        </p>
        <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
          <li>
            <a
              className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:joshuarichards001@gmail.com"
            >
              <ArrowIcon />
              <p className="h-7">contact me on email</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/joshrichardsdev"
            >
              <ArrowIcon />
              <p className="h-7">follow me on twitter</p>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
