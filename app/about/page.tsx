import { Metadata } from "next";
import React from "react";
import { ArrowIcon, GitHubIcon, LinkedinIcon, TwitterIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "About",
  description: "Software Engineer at Xero.",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">Hey, I'm Josh.</p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm currently a Software Engineer at Xero, where I help modernise the Invoicing Platform. I focus on{" "}
          writing legible, scalable code that provides a beautiful user experience for hundreds of thousands of small
          businesses.
        </p>
        <hr />
        <p>
          I love building for the web. From something as simple as a single HTML file - all the way to large
          scale applications. The ability to turn an idea into a working product for anyone to use is so rewarding!
          It's opened so many doors and expanded how I think about problems.
        </p>
        <p className="mb-8">
          Outside of Xero, I also work on a number of personal projects solving problems I'm drawn to. I also
          love to play the piano, go bouldering, watch a good movie, or read a good book.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/joshuarichards001"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/joshua-stewart-richards/"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkedinIcon />
              <div className="ml-3">Linkedin</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/joshrichardsdev"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <TwitterIcon />
              <div className="ml-3">Twitter</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
