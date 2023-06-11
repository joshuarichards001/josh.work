import { Metadata } from "next";
import React from "react";
import TitleComponent from "../components/title";

export const metadata: Metadata = {
  title: "Work",
  description: "Software Engineer at Xero.",
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-10">Work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <TitleComponent title="Xero (2020 - Present)" link="https://www.xero.com/" />
        <p>
          During my time at Xero, I have been a full stack engineer and played a pivotal role in building the modernised
          invoicing platform that is used by hundreds of thousands of small businesses every day.
        </p>
        <p>
          My contributions to the platform included developing new features, optimizing existing code, and debugging
          issues to ensure a seamless user experience. My work at Xero allowed me to refine my skills in full stack
          development, project management, and problem-solving, and I am proud to have contributed to such an impactful
          platform for small businesses.
        </p>
        <hr />
        <TitleComponent title="Hedges (2021 - 2022)" link="/blog/hedges" newTab={false} />
        <p>
          Hedges is a portfolio management application built out of the popularity of my personal project Ticker
          Tracker. After amassing over 650 users within a week with an overwhelming amount of positive feedback
          regarding the concept I decided to take it more seriously.
        </p>
        <p>
          After teaming up with a co-founder we got starting on designing and building a cross platform portfolio
          tracking app. The application is built using React Native, NodeJS and PostgreSQL. Although life events on both
          of our parts prevented us from releasing the project, working on Hedges was a valuable learning experience
          that honed my technical and interpersonal skills, and allowed me to develop my entrepreneurial spirit.
        </p>
        <hr />
        <TitleComponent title="CR Automation (2018 - 2020)" link="https://crautomation.nz/" />
        <p>
          During the 2019/20 summer, I completed an internship at the automation engineering firm CR Automation.
          During my time there, I worked on an independent project to build a business intelligence agent. This piece of
          software would receive data from a data source (e.g. PLC, Computer, Database, etc.) and send it to multiple
          SQL Server databases or files by using various communication protocols concurrently.
        </p>
        <p>
          It was built to support the Business Intelligence Specialist in aggregating relevant data to one location to
          make intelligent business decisions. The program was built using C#, .NET, and SQL Server.
        </p>
      </div>
    </section>
  );
}
