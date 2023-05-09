import { Metadata } from "next";
import React from "react";
import { ArrowIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software Engineer at Xero.",
};

export default function page() {
  const TitleComponent = ({ title, link }: { title: string; link: string }) => {
    return (
      <a
        className="flex items-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
        rel="noopener noreferrer"
        target="_blank"
        href={link}
      >
        <ArrowIcon />
        <p className="font-bold text-xl font-serif m-0">{title}</p>
      </a>
    );
  };

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-10">Projects</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <TitleComponent title="Ticker Tracker" link="https://tickertracker.co/" />
        <p>
          Ticker Tracker is a full-stack portfolio tracking application that has over 650 users and 10,000 sessions. It
          is a place where users can aggregate all of their investments into one location. It is built using React,
          Redux, Typescript, and SCSS for the frontend, Yahoo Finance for the financial data, Fixer for the foreign
          currency rates, and Firebase to host the backend/database. It has several functions, including adding, editing
          and deleting users assets and an auto-suggest search bar containing thousands of different stocks,
          cryptocurrencies and ETFs.
        </p>
        <hr />
        <TitleComponent title="Album Listen List" link="https://albumlistenlist.com/" />
        <p>
          Album Listen List is a full-stack application that has over 200 users. It is a place where users can aggregate
          all of the albums they plan to listen to in the future. It is built using React, Typescript, Tailwind for the
          frontend, and Firebase to host the backend/database.
        </p>
        <hr />
        <TitleComponent title="Financial Freedom" link="https://financial-freedom.netlify.app/" />
        <p>
          Financial Freedom is a full stack budgeting application to help users manage their transactions. It is built
          using React, Typescript and CSS for the frontend (deployed using Netlify) and Python, Django and SQLite for
          the backend (deployed using Heroku). It has a number of functions including adding and deleting users
          transactions, visualisation of transactions through pie charts, creating a budget based on how the user wants
          to spend their money, Hot swapping the pages columns so that the user can decide what they want to see,
          registering users through email and finally registering users using their Google account.
        </p>
      </div>
    </section>
  );
}
